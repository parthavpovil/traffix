import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage'; // Import the LandingPage
import AppContent from './AppContent';  // Import the new AppContent



function App() {
  return (
    <Router>
      <Routes>
        {/* Define route for the LandingPage */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Define route for the main wallet connection app */}
        <Route path="/app" element={<AppContent />} />
      </Routes>
    </Router>
  );
}

export default App;
