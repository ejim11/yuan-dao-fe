"use client";
import React from "react";
import { LiaTimesSolid } from "react-icons/lia";

const ConnectWalletModal = () => {
  return (
    <div className="fixed w-full h-screen flex items-center justify-center z-50 ">
      <div className="fixed w-full h-screen filter bottom-0 top-0 left-0 right-0 bg-[rgba(0,0,0,.6)]"></div>
      <div className="filter-none bg-color-gray-3 relative z-60 p-[2rem] ">
        <div className="flex items-center">
          <p className=" ">Connect your wallet</p>
          <LiaTimesSolid className="" />
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletModal;
