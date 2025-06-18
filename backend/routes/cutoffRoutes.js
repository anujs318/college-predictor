const express = require('express');
const router = express.Router();
const Cutoff = require('../models/Cutoff');

// ✅ Get All Cutoff Data
router.get('/', async (req, res) => {
    try {
        const cutoffs = await Cutoff.find();
        res.json(cutoffs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ✅ Search API (by college, branch, category)
router.get('/search', async (req, res) => {
    const { college, branch, category } = req.query;

    try {
        const results = await Cutoff.find({
            college: { $regex: college || '', $options: 'i' },
            branch: { $regex: branch || '', $options: 'i' },
            category: { $regex: category || '', $options: 'i' }
        });

        res.json(results);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Search API
router.get('/search', async (req, res) => {
    const { college, branch, category } = req.query;

    let query = {};

    if (college) {
        query.college = { $regex: college, $options: 'i' }; // case-insensitive search
    }
    if (branch) {
        query.branch = { $regex: branch, $options: 'i' };
    }
    if (category) {
        query.category = { $regex: category, $options: 'i' };
    }
    if (minRank && maxRank) {
        query.merit_number = { $gte: parseInt(minRank), $lte: parseInt(maxRank) };
    }

    try {
        const results = await Cutoff.find(query);
        res.json(results);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
