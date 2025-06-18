import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Predictor from './pages/Predictor';
import Colleges from './pages/Colleges';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/predictor" element={<Predictor />} />
        <Route path="/colleges" element={<Colleges />} />
      </Routes>
    </Router>
  );
}

export default App;
