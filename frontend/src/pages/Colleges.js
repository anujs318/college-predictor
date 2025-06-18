import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

function Colleges() {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/cutoffs/search${location.search}`);
        setColleges(response.data);
      } catch (error) {
        console.error('Error fetching colleges:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchColleges();
  }, [location.search]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
      <motion.h2
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Predicted Colleges
      </motion.h2>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : colleges.length === 0 ? (
        <p className="text-center">No colleges found. Try different filters.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {colleges.map((college, index) => (
            <motion.div
              key={index}
              className="bg-white text-black p-4 rounded-xl shadow hover:scale-105 transform transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <h3 className="font-bold text-lg">{college.college}</h3>
              <p>{college.branch}</p>
              <p>Category: {college.category}</p>
              <p>Rank: {college.merit_number}</p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Colleges;
