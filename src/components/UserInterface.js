import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { History, ChevronDown, ChevronUp } from 'lucide-react';
import WebcamCapture from './WebcamCapture';

function UserInterface({ walletAddress, signer }) {
  const [showHistory, setShowHistory] = useState(false);

  const toggleHistory = () => setShowHistory(!showHistory);

  return (
    <motion.div
      className="bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      
      <motion.button
        className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-full text-white w-full flex items-center justify-center mb-6"
        onClick={toggleHistory}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <History className="mr-2" size={20} />
        {showHistory ? 'Hide History' : 'Show History'}
        {showHistory ? <ChevronUp className="ml-2" size={20} /> : <ChevronDown className="ml-2" size={20} />}
      </motion.button>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: showHistory ? 1 : 0, height: showHistory ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        {showHistory && (
          <div className="bg-indigo-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-4 text-indigo-800 text-center">Your Report History</h3>
            {/* Implement history display */}
            <p className="text-gray-600 text-center">No reports found. Start by submitting a new report!</p>
          </div>
        )}
      </motion.div>

      <WebcamCapture walletAddress={walletAddress} signer={signer} />
    </motion.div>
  );
}

export default UserInterface;