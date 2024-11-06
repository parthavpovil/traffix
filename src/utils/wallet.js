import { BrowserProvider } from "ethers"; // Updated import

import Web3Modal from 'web3modal';
import { ethers } from 'ethers';

let web3Modal;
let provider;
let signer;

export async function connectWallet() {
  web3Modal = new Web3Modal({
    cacheProvider: false, // optional
  });

  try {
    const instance = await web3Modal.connect();
    provider = new BrowserProvider(instance); // Updated to BrowserProvider
    signer = await provider.getSigner(); // Make sure to await getSigner()
    return { provider, signer };
  } catch (error) {
    console.error('Could not connect to wallet', error);
  }
}

export function getSigner() {
  return signer;
}
