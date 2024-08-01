"use client";
import React, { useCallback, useEffect, useState } from "react";
// import { ConnectButton } from "@web3uikit/web3";
import { ethers } from "ethers";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { useMoralis } from "react-moralis";

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

const Header = () => {
  const [account, setAccount] = useState("");
  //   const getSigner = useCallback(async () => {
  //     try {
  //       const provider = new ethers.BrowserProvider(window.ethereum);
  //       const signer = await provider.getSigner();
  //       console.log(signer);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }, []);

  //   useEffect(() => {
  //     getSigner();
  //   }, [getSigner]);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request account access if needed
        await window.ethereum.request({ method: "eth_requestAccounts" });

        // Create an ethers.js provider
        const provider = new ethers.BrowserProvider(window.ethereum);

        // Get the signer (account)
        const signer = await provider.getSigner();
        const address = await signer.getAddress();

        // Set the account state
        setAccount(address);
      } catch (error: any) {
        if (error.code === -32002) {
          alert(
            "Connection request already pending. Please check your wallet."
          );
        } else {
          console.error("Error connecting to wallet:", error);
        }
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this dApp.");
    }
  };

  const displayWalletsToConnect = () => {};

  return (
    <header className="flex items-center h-[7rem] px-[5rem] font-ptSans">
      <p className="text-[2rem] font-londrinaSolid ">YUAN</p>
      <div className="flex">
        <p>Treasury</p>
        <p>5000</p>
      </div>
      <div className="ml-auto">
        <button
          type="button"
          onClick={displayWalletsToConnect}
          className="font-normal"
        >
          {account ? account.substring(0, 6) : "Connect Wallet"}
        </button>
      </div>
    </header>
  );
};

export default Header;
