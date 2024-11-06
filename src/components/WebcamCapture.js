import React, { useState, useCallback, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import { motion } from 'framer-motion';
import { Camera, RotateCcw, Upload, Send, Eye, RefreshCw, MapPin } from 'lucide-react';
import Modal from './Modal';
import { pinata } from '../utils/config';
import { ethers } from 'ethers';
import { contractABI, contractAddress } from '../utils/contract';

function WebcamCapture({ walletAddress, signer }) {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [isWebcamOn, setIsWebcamOn] = useState(true);
  const [uploadUrl, setUploadUrl] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFrontCamera, setIsFrontCamera] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [isGettingLocation, setIsGettingLocation] = useState(false);

  const videoConstraints = {
    facingMode: isFrontCamera ? 'user' : { exact: 'environment' },
  };

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    setIsGettingLocation(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`${latitude}, ${longitude}`);
          setIsGettingLocation(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          setLocation("Location unavailable");
          setIsGettingLocation(false);
        }
      );
    } else {
      setLocation("Geolocation not supported");
      setIsGettingLocation(false);
    }
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) {
      setCapturedImage(imageSrc);
      setIsWebcamOn(false);
    }
  }, [webcamRef]);

  const handleUpload = async () => {
    if (!capturedImage) return;
    setIsUploading(true);
    try {
      const response = await fetch(capturedImage);
      const blob = await response.blob();
      const formData = new FormData();
      formData.append('file', blob, 'photo.jpg');

      const uploadResponse = await pinata.post('/pinning/pinFileToIPFS', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      const result = uploadResponse.data;
      const ipfsUrl = `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`;
      setUploadUrl(ipfsUrl);
      setIsUploaded(true);
    } catch (error) {
      console.error('Error uploading file to IPFS:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmitReport = async () => {
    if (!uploadUrl) return;
    try {
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      const tx = await contract.submitReport(description, location, uploadUrl);
      await tx.wait();
      console.log("Report submitted successfully!");
      // You might want to add some state here to show a success message
    } catch (error) {
      console.error("Error submitting report:", error);
    }
  };

  const toggleCamera = () => {
    setIsFrontCamera((prev) => !prev);
  };

  const handleRecapture = () => {
    setCapturedImage(null);
    setIsWebcamOn(true);
    setIsUploaded(false);
    setDescription('');
    getLocation(); // Refresh location when recapturing
  };

  return (
    <motion.div 
      className="flex flex-col items-center bg-white rounded-lg shadow-xl p-6 max-w-md w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl font-bold text-indigo-800 mb-6">Capture Evidence</h2>
      {isWebcamOn && (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          className="mb-4 w-full rounded-lg shadow-md"
        />
      )}
      {capturedImage ? (
        <motion.div 
          className="w-full space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <img src={capturedImage} alt="Captured" className="mb-4 w-full rounded-lg shadow-lg" />
          
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Fill Description
            </label>
            <textarea
              id="description"
              rows="3"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
              placeholder="Describe the captured evidence..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </motion.div>

          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <div className="flex items-center">
              <input
                type="text"
                id="location"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
                value={location}
                readOnly
              />
              <button
                onClick={getLocation}
                className="ml-2 p-2 bg-indigo-100 rounded-md"
                disabled={isGettingLocation}
              >
                <MapPin className={`text-indigo-600 ${isGettingLocation ? 'animate-spin' : ''}`} size={20} />
              </button>
            </div>
          </motion.div>

          {!isUploaded && (
            <motion.button
              className={`bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-full text-white w-full flex items-center justify-center ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={handleUpload}
              disabled={isUploading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Upload className="mr-2" size={20} />
              {isUploading ? 'Uploading...' : 'Upload to IPFS'}
            </motion.button>
          )}

          {isUploaded && (
            <>
              <motion.button
                className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full text-white w-full flex items-center justify-center"
                onClick={handleSubmitReport}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="mr-2" size={20} />
                Submit Report
              </motion.button>
            </>
          )}

          <motion.button
            className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-full text-white w-full flex items-center justify-center"
            onClick={handleRecapture}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RotateCcw className="mr-2" size={20} />
            Recapture Photo
          </motion.button>
        </motion.div>
      ) : (
        <motion.div 
          className="w-full space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.button 
            className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-full text-white w-full flex items-center justify-center"
            onClick={capture}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Camera className="mr-2" size={20} />
            Capture Photo
          </motion.button>
          <motion.button 
            className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-full text-white w-full flex items-center justify-center"
            onClick={toggleCamera}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RefreshCw className="mr-2" size={20} />
            Switch to {isFrontCamera ? 'Back' : 'Front'} Camera
          </motion.button>
        </motion.div>
      )}
      {isModalOpen && <Modal uploadUrl={uploadUrl} closeModal={() => setIsModalOpen(false)} />}
    </motion.div>
  );
}

export default WebcamCapture;