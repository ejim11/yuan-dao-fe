"use client";
import React, { useCallback, useEffect, useState } from "react";
// import { ConnectButton } from "@web3uikit/web3";
import { ethers } from "ethers";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { useMoralis } from "react-moralis";
import { RiMenu5Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
import { TiArrowSortedDown } from "react-icons/ti";
import Link from "next/link";

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
    <header className="flex items-center h-[8rem] px-[5rem] font-ptSans z-20 relative">
      <Link href={"/"} className="text-[3rem] font-londrinaSolid ">
        YUAN
      </Link>

      <div className="ml-auto flex items-center relative">
        <Link
          href={"/proposals"}
          className="font-medium border-color-border border px-[1rem] py-[0.5rem] rounded-xl hover:bg-color-gray-3 transition-all duration-150 ease-in flex items-center mr-[2rem]"
        >
          <FaUsers className="text-color-gray-2" />
          <p className="mx-[1rem] font-medium ">Proposals</p>
          {/* <TiArrowSortedDown className="w-[2.5rem] h-[2.5rem]" /> */}
        </Link>
        <button
          type="button"
          onClick={displayWalletsToConnect}
          className="font-medium border-color-border border px-[1rem] py-[0.5rem] rounded-xl hover:bg-color-gray-3 transition-all duration-150 ease-in"
        >
          {account ? account.substring(0, 6) : "Connect"}
        </button>
      </div>
    </header>
  );
};

export default Header;
