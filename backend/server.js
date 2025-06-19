require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: '*'
}));


// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('✅ MongoDB Connected Successfully'))
    .catch((err) => console.error('❌ MongoDB Connection Failed:', err));

// ✅ Define the Schema
const cutoffSchema = new mongoose.Schema({
    college: String,
    branch: String,
    seat_type: String,
    category: String,
    merit_number: Number,
    percentile: Number
});

// ✅ Create the Model
const Cutoff = mongoose.model('Cutoff', cutoffSchema);

// ✅ Basic Home Route
app.get('/', (req, res) => {
    res.send('College Predictor Backend Running');
});

// ✅ Final Rank-Based Search API (with fallback)
app.get('/api/cutoffs/search', async (req, res) => {
    try {
        const userRank = parseInt(req.query.rank);
        console.log('User Rank:', userRank);

        if (!userRank) {
            return res.status(400).json({ message: "Please provide your rank." });
        }

        let colleges = await Cutoff.find({
            merit_number: { $gte: userRank }
        }).sort({ merit_number: 1 }).limit(20);

        console.log('Colleges found above rank:', colleges.length);

        if (colleges.length === 0) {
            colleges = await Cutoff.find({
                merit_number: { $lte: userRank }
            }).sort({ merit_number: -1 }).limit(20);

            console.log('Colleges found below rank:', colleges.length);
        }

        if (colleges.length === 0) {
            colleges = await Cutoff.aggregate([{ $sample: { size: 20 } }]);
            console.log('Fallback: Random colleges returned.');
            
        }

        res.json(colleges);
    } catch (error) {
        console.error('Error searching colleges:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// ✅ Start Server
app.listen(process.env.PORT || 5000, () => console.log(`✅ Server running on port ${process.env.PORT || 5000}`));

