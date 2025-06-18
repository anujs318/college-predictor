import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Maharashtra College Predictor
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl mb-8 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Find the best colleges based on your MHT-CET ranks.
      </motion.p>
      <Link to="/predictor">
        <motion.button
          className="bg-white text-blue-600 px-6 py-3 rounded-xl text-lg hover:bg-gray-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Start Prediction
        </motion.button>
      </Link>
    </div>
  );
}

export default Home;
