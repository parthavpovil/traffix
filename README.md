<img width="1436" alt="Screenshot 2024-11-06 at 9 56 03 AM" src="https://github.com/user-attachments/assets/850df9bb-8df5-4299-874d-34fac34dadb1">
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
[Connect Wallet]
<img width="681" alt="Screenshot 2024-11-06 at 9 56 24 AM" src="https://github.com/user-attachments/assets/c9f7e691-b0d2-4845-be90-30b4f1b65b31">



### 2. Capture Image
Users capture images directly from their webcam.
![Capture Image]
<img width="749" alt="Screenshot 2024-11-06 at 10 02 00 AM" src="https://github.com/user-attachments/assets/06fb3d49-84bb-45c7-b100-3d0e7bb97344">

### 3. Add Details
Users fill out location, description, and other details.
![Add Details]
<img width="749" alt="Screenshot 2024-11-06 at 10 02 19 AM" src="https://github.com/user-attachments/assets/77130602-bb04-40d1-a124-e68597c4f5bb">


### 4. Submit Report
The report is securely submitted to the blockchain.
![Submit Report]
<img width="749" alt="Screenshot 2024-11-06 at 9 57 29 AM" src="https://github.com/user-attachments/assets/db47f262-3989-4fc5-a50f-20a9a159e094">

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
