const mongoose = require('mongoose');
const csv = require('csvtojson');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Import your Mongoose schema
const Cutoff = require('./models/Cutoff');

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => {
    console.error('❌ MongoDB connection failed:', err);
    process.exit(1);
  });

const folderPath = 'C:/Users/anujs/Downloads/mehtcet/extracted_csv';

fs.readdir(folderPath, async (err, files) => {
  if (err) {
    console.error('❌ Failed to read directory:', err);
    return;
  }

  const csvFiles = files.filter(file => file.endsWith('.csv'));

  for (const file of csvFiles) {
    const filePath = path.join(folderPath, file);
    console.log(`📄 Uploading file: ${filePath}`);

    try {
      const jsonArray = await csv().fromFile(filePath);
      await Cutoff.insertMany(jsonArray);
      console.log(`✅ Uploaded ${jsonArray.length} records from ${file}`);
    } catch (uploadErr) {
      console.error(`❌ Error uploading ${file}:`, uploadErr);
    }
  }

  mongoose.disconnect();
  console.log('✅ Upload complete. MongoDB disconnected.');
});
