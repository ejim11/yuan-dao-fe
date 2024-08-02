"use client";
import React from "react";
import { MetaMaskInpageProvider } from "@metamask/providers";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/hooks/customHook";
import { walletActions } from "@/slices/walletSlice";

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

const Header = () => {
  const dispatch = useAppDispatch();

  const { account } = useAppSelector((state) => state.wallet);

  const displayWalletsToConnect = () => {
    dispatch(walletActions.toggleWalletModal(true));
  };

  return (
    <header className="flex items-center h-[8rem] px-[10rem] font-ptSans z-20 relative">
      <Link
        href={"/"}
        className="text-[3rem] font-londrinaSolid block  font-[900]"
      >
        YUAN
      </Link>

      <div className="ml-auto flex items-center relative">
        <button
          type="button"
          onClick={displayWalletsToConnect}
          className={`font-medium ${
            account ? "border-color-gold" : "border-color-border"
          }  border px-[1rem] py-[0.5rem] rounded-xl hover:bg-color-gray-3 transition-all duration-150 ease-in`}
        >
          {account ? (
            <div className="flex items-center ">
              <span className="text-color-gold text-[1.8rem] font-semibold font-londrinaSolid">
                {account.substring(0, 6)}...{account.slice(-5)}
              </span>
              <div className="ml-[1.5rem] bg-gradient-to-r from-color-green via-color-blue  to-color-gold  w-[3rem] h-[3rem] rounded-full"></div>
            </div>
          ) : (
            "Connect"
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
