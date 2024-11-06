import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle } from 'lucide-react';

function OwnerInterface() {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center justify-center mb-6">
        <Shield className="text-indigo-600 mr-3" size={32} />
        <h2 className="text-3xl font-bold text-indigo-800">Owner Dashboard</h2>
      </div>

      <p className="text-gray-600 text-center mb-8">
        As the owner, you have the authority to verify and manage reports submitted by users.
      </p>

      <motion.button
        className="bg-indigo-600 hover:bg-indigo-700 px-6 py-4 rounded-full text-white w-full flex items-center justify-center text-lg font-semibold"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <CheckCircle className="mr-2" size={24} />
        Verify Reports
      </motion.button>

      <div className="mt-8 bg-indigo-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 text-indigo-800">Recent Activity</h3>
        <p className="text-gray-600">No recent activity to display. Check back later for updates.</p>
      </div>
    </motion.div>
  );
}

export default OwnerInterface;