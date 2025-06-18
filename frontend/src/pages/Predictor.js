import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Helmet } from 'react-helmet';

<Helmet>
  <title>College Predictor | Find Your College by Rank</title>
  <h1>College Predictor for MHT-CET and NEET</h1>
  <meta name="description" content="Predict your college using your entrance exam rank for MHT-CET, NEET, and more. Fast and student-friendly." />
  <meta name="keywords" content="college predictor, MHT CET, NEET predictor, engineering colleges, Maharashtra colleges, college cutoff" />
</Helmet>


function Predictor() {
  const [rank, setRank] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rank) return alert('Please enter your rank');

    navigate(`/colleges?rank=${rank}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Enter Your Rank
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <input
          className="p-3 rounded text-black"
          type="number"
          placeholder="Enter Your Rank"
          value={rank}
          onChange={(e) => setRank(e.target.value)}
          required
        />

        <motion.button
          className="bg-white text-purple-600 px-4 py-3 rounded-xl hover:bg-gray-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Predict Colleges
        </motion.button>
      </motion.form>
    </div>
  );
}

export default Predictor;
