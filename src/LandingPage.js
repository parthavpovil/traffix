import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

function LandingPage() {
  const [showSteps, setShowSteps] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/app');
  };

  const handleHowToUse = () => {
    setShowSteps(!showSteps);
  };

  const steps = [
    { title: "Connect Wallet", description: "Open the app and connect your Metamask wallet." },
    { title: "Capture Image", description: "Use the app to take a photo of the road safety issue you want to report." },
    { title: "Add Details", description: "Provide additional information about the issue in the report form." },
    { title: "Submit Report", description: "Click the submit button to send your report to the blockchain anonymously." },
    { title: "View Reports", description: "Browse through existing reports to see what others have submitted and track community issues." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="flex justify-between items-center p-6">
        <div className="text-3xl font-bold text-indigo-600">TRAFFIX</div>
        <button 
          className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
          onClick={handleHowToUse}
        >
          How to use?
        </button>
      </header>
      
      <main className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between">
        <motion.div 
          className="lg:w-5/12 mb-12 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <img src="https://i.imgur.com/nywH83H.png" alt="Creator" className="w-full h-auto rounded-lg shadow-2xl" />
          </div>
        </motion.div>
        
        <motion.div 
          className="lg:w-6/12 text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold text-indigo-800 mb-6">Empower Road Safety</h1>
          <p className="text-xl text-gray-700 mb-8">
            Traffix empowers citizens to anonymously and securely report reckless driving, earning rewards while contributing to safer roads and making road safety a community-driven mission.
          </p>
          <motion.button 
            className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 shadow-lg"
            onClick={handleGetStarted}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Get Started
          </motion.button>
        </motion.div>
      </main>

      {showSteps && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-white rounded-lg p-8 max-w-2xl w-full relative"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
          >
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={handleHowToUse}
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold text-indigo-600 mb-6">How to Use Traffix</h2>
            <ul className="space-y-4">
              {steps.map((step, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold mr-3">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg text-indigo-800">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default LandingPage;