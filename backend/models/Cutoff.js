const mongoose = require('mongoose');

const cutoffSchema = new mongoose.Schema({
    college: String,
    branch: String,
    seat_type: String,
    category: String,
    merit_number: Number,
    percentile: Number
});

module.exports = mongoose.model('Cutoff', cutoffSchema);
