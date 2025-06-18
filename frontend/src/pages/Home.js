import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/college-predictor.png'; // ✅ Import your logo here
import { Helmet } from 'react-helmet';

<Helmet>
  <meta name="description" content="Predict your college using your entrance exam rank for MHT-CET, NEET, and more. Fast and student-friendly." />
  <meta name="keywords" content="college predictor, MHT CET, NEET predictor, engineering colleges, Maharashtra colleges, college cutoff" />
</Helmet>


function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 text-center">
      
      {/* ✅ Add the Logo */}
      <motion.img
        src={logo}
        alt="College Predictor Logo"
        className="w-32 h-32 mb-6" // You can adjust the size here
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        MHT-CET College Predictor
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
