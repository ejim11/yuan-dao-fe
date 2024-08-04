"use client";
import React from "react";
import { MoralisProvider } from "react-moralis";
import ConnectWalletModal from "./ConnectWalletModal";
import { useAppSelector } from "@/hooks/customHook";
import { AnimatePresence } from "framer-motion";
import CreateProposalModal from "./CreateProposalModal";

const ProviderMoralis: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isWalletModalOpen } = useAppSelector((state) => state.wallet);
  const { isCreateProposalModalOpen } = useAppSelector(
    (state) => state.proposal
  );
  return (
    <MoralisProvider initializeOnMount={false}>
      <AnimatePresence>
        {isWalletModalOpen && <ConnectWalletModal />}
      </AnimatePresence>
      <AnimatePresence>
        {isCreateProposalModalOpen && <CreateProposalModal />}
      </AnimatePresence>
      {children}
    </MoralisProvider>
  );
};

export default ProviderMoralis;
