import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { motion } from 'framer-motion';
import OwnerInterface from './components/OwnerInterface';
import UserInterface from './components/UserInterface';
import { connectWallet } from './utils/wallet';
import { contractABI, contractAddress } from './utils/contract';
import { Wallet, User, Shield } from 'lucide-react';

function AppContent() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [loading, setLoading] = useState(false);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [walletAddress, setWalletAddress] = useState('');

  const handleConnectWallet = async () => {
    setLoading(true);
    try {
      if (isMobile()) {
        if (typeof window.ethereum === 'undefined') {
          window.location.href = 'https://metamask.app.link/dapp/https://kichuman28.github.io/ipfs/';
          return;
        }
      }

      if (typeof window.ethereum !== 'undefined' || typeof window.web3 !== 'undefined') {
        const provider = window.ethereum || window.web3.currentProvider;
        const { signer: walletSigner, provider: walletProvider } = await connectWallet();
        const walletAddress = await walletSigner.getAddress();
        setSigner(walletSigner);
        setProvider(walletProvider);
        setWalletConnected(true);
        setWalletAddress(walletAddress);
        await checkIfOwner(walletSigner);
      } else {
        alert('Please install MetaMask or use the MetaMask mobile app!');
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
    } finally {
      setLoading(false);
    }
  };

  const isMobile = () => {
    const toMatch = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];
    return toMatch.some((toMatchItem) => navigator.userAgent.match(toMatchItem));
  };

  const checkIfOwner = async (signer) => {
    try {
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      const ownerAddress = await contract.owner();
      const signerAddress = await signer.getAddress();
      setIsOwner(ownerAddress.toLowerCase() === signerAddress.toLowerCase());
    } catch (error) {
      console.error('Error checking owner status:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4 sm:p-8">
      <motion.h1 
        className="text-5xl font-bold mb-12 text-indigo-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Traffix
      </motion.h1>

      {!walletConnected ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            className={`bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-full text-white text-lg font-semibold transition-all duration-300 flex items-center ${loading ? 'animate-pulse' : ''}`}
            onClick={handleConnectWallet}
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Wallet className="mr-2" size={24} />
            {loading ? 'Connecting...' : 'Connect Wallet'}
          </motion.button>
        </motion.div>
      ) : (
        <motion.div 
          className="w-full max-w-2xl bg-white rounded-lg shadow-xl p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <User className="text-indigo-600 mr-2" size={24} />
            <p className="text-lg text-gray-700">Connected to wallet: <span className="font-semibold">{walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</span></p>
          </div>
          {isOwner ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center justify-center mb-4">
                <Shield className="text-indigo-600 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-indigo-800">Owner Dashboard</h2>
              </div>
              <OwnerInterface />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-indigo-800 mb-4 text-center">User Dashboard</h2>
              <UserInterface walletAddress={walletAddress} signer={signer} />
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
}

export default AppContent;