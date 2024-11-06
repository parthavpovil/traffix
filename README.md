
<img width="1436" alt="Screenshot 2024-11-06 at 9 56 03 AM" src="https://github.com/user-attachments/assets/0d1b64ef-fbed-4ea5-947a-36562667f9d3">
# Traffix - Road Safety Reporting DApp

## Overview
**Traffix** is a decentralized web application (DApp) designed to empower citizens to report traffic violations and road safety issues anonymously. Built using **React** and **Web3.js**, this application uses the blockchain for secure, transparent storage, integrates **Metamask** for wallet connection, and leverages **IPFS** for decentralized image storage. This platform encourages community engagement in maintaining road safety by offering a bounty system for validated reports.

### Key Features:
1. **Connect Wallet**: Users connect their Metamask wallet to interact with the DApp.
2. **Capture Image**: Users can capture images of road safety issues with their webcam.
3. **Submit Report**: Easily upload reports, including images and descriptions, to the blockchain.
4. **View Reports**: Access and review community-reported issues for broader awareness.
5. **Admin Verification**: Separate admin interface for reviewing, verifying reports, and rewarding reporters.

## Technologies Used:
- **React.js**: User interface.
- **Web3.js**: Blockchain interactions and smart contract calls.
- **Metamask**: Wallet integration.
- **IPFS & Pinata**: Decentralized image storage and management.
- **Ethereum Blockchain**: For secure, immutable report storage.

---

## Screenshots

### 1. Connect Wallet
Users begin by connecting their Metamask wallet.
![Connect Wallet]
<img width="681" alt="Screenshot 2024-11-06 at 9 56 24 AM" src="https://github.com/user-attachments/assets/8fd79218-ebe2-4d44-8e77-6ee35beab23e">


### 2. Capture Image
Users capture images directly from their webcam.
![Capture Image]
<img width="749" alt="Screenshot 2024-11-06 at 10 02 00 AM" src="https://github.com/user-attachments/assets/19419cd0-2c5d-43b2-b6c1-30af7d7129b9">

### 3. Add Details
Users fill out location, description, and other details.
![Add Details]
<img width="749" alt="Screenshot 2024-11-06 at 10 02 19 AM" src="https://github.com/user-attachments/assets/efa6a6be-1e5d-40b8-bf0d-6333ff7d1757">

### 4. Submit Report
The report is securely submitted to the blockchain.
![Submit Report]
<img width="749" alt="Screenshot 2024-11-06 at 9 57 29 AM" src="https://github.com/user-attachments/assets/384b8d1e-072f-4489-98a1-756809236b10">
---

## Getting Started

### Prerequisites
Ensure you have the following installed:
- **Node.js**: Download from [Node.js Official Website](https://nodejs.org/).
- **npm**: Included with Node.js.
- **Metamask Wallet**: [Install Metamask](https://metamask.io/) in your browser.
- **Git**: For cloning the repository.

### Installation Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/parthavpovil/traffix.git
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd traffix
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Start the Development Server:**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## Deployment

To deploy the application on GitHub Pages:

1. **Install `gh-pages`:**
   ```bash
   npm install gh-pages --save-dev
   ```

2. **Add Deployment Script in `package.json`:**
   ```json
   "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
   }
   ```

3. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

---

## Usage Guide

1. **Connect Wallet**: Open the app and connect your Metamask wallet using the "Connect Wallet" button.
2. **Capture an Image**: Use the camera to capture an image of the violation.
3. **Add Report Details**: Provide details like location and description.
4. **Submit Report**: Submit the completed report to the blockchain.
5. **View Reports**: Explore community-reported issues.

---

## Folder Structure

- `src/components/`: Reusable React components.
- `src/pages/`: Application pages.
- `src/utils/`: Utilities for blockchain and IPFS interactions.
- `src/context/`: Context API setup for global state management.

---



## Contributions
Contributions are welcome! Fork the repository and create a pull request for any feature additions or fixes.
