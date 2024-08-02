"use client";
import React, { MouseEventHandler } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import walletsData, { WalletData } from "./data/WalletsData";
import Image from "next/image";
import { useAppDispatch } from "@/hooks/customHook";
import { walletActions } from "@/slices/walletSlice";
import { motion } from "framer-motion";
import { ethers } from "ethers";

const ConnectWalletModal = () => {
  const dispatch = useAppDispatch();

  const connectMetamaskWallet = async (e: any) => {
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
        dispatch(walletActions.setAccount(address));
        dispatch(walletActions.toggleWalletModal(false));
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

  const closeConnectWalletModal = (e: any) => {
    if (e.currentTarget.dataset.close) {
      dispatch(walletActions.toggleWalletModal(false));
    }
  };

  const connectFunctions: MouseEventHandler<HTMLButtonElement>[] = [
    connectMetamaskWallet,
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, y: "100%" }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className="fixed w-full h-screen flex items-center justify-center z-50 font-ptSans cursor-pointer"
      onClick={closeConnectWalletModal}
      data-close="close-modal-out"
    >
      <div className="fixed w-full h-screen blur-item bottom-0 top-0 left-0 right-0 bg-[rgba(0,0,0,.6)]"></div>
      <div
        className=" relative z-60 p-[2rem] w-[40%] bg-[hsla(0,0%,100%,.6)] rounded-xl blur-item cursor-default shadow-xl shadow-color-border "
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="flex items-center justify-between">
          <p className="font-medium text-[2rem] font-londrinaSolid capitalize">
            Connect your wallet
          </p>
          <button
            onClick={closeConnectWalletModal}
            data-close="close-modal"
            className="bg-color-gray-2 w-[4rem] h-[4rem] rounded-xl flex items-center justify-center"
          >
            <LiaTimesSolid
              className="w-[2.5rem] h-[2.5rem]"
              data-close="close-modal"
            />
          </button>
        </div>
        <div className="flex flex-wrap justify-between mt-[2.5rem] ">
          {walletsData.map((wallet: WalletData, i: number) => (
            <button
              key={wallet.name}
              onClick={connectFunctions[i]}
              className="flex items-center w-[45%] mb-[3rem] bg-[hsla(0,0%,100%,.7)] justify-center py-[.5rem] rounded-xl hover:bg-color-blue hover:text-color-gray-3 transition-all duration-150 ease-in"
            >
              <div className="w-auto h-[3rem]  mr-[1.5rem] ">
                <Image
                  src={wallet.icon}
                  alt={wallet.alt}
                  priority
                  className="w-full h-full"
                />
              </div>

              <p>{wallet.name}</p>
            </button>
          ))}
        </div>
        <div className="items-center flex mt-[3rem]">
          <div className="flex-1 h-[0.1rem] bg-color-gray-2"></div>
          <p className="text-[2rem] uppercase font-semibold text-color-gray-1 mx-[2rem] font-londrinaSolid">
            yuan
          </p>
          <div className="flex-1 h-[0.1rem] bg-color-gray-2 "></div>
        </div>
      </div>
    </motion.div>
  );
};

export default ConnectWalletModal;
