import React from 'react';
import { motion } from 'framer-motion';
import { X, Link as LinkIcon } from 'lucide-react';

function Modal({ uploadUrl, closeModal }) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-lg shadow-2xl max-w-md w-full p-8"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-indigo-800">IPFS URL</h2>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="bg-indigo-50 rounded-lg p-4 mb-6">
          <div className="flex items-center mb-2">
            <LinkIcon size={20} className="text-indigo-600 mr-2" />
            <span className="font-semibold text-indigo-800">Your file is available at:</span>
          </div>
          <a
            href={uploadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 underline break-all"
          >
            {uploadUrl}
          </a>
        </div>
        <motion.button
          className="bg-indigo-600 hover:bg-indigo-700 text-white w-full py-3 rounded-full font-semibold"
          onClick={closeModal}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Close
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default Modal;