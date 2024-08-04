"use client";
import { motion } from "framer-motion";
import React from "react";
import { useAppDispatch } from "@/hooks/customHook";
import { proposalActions } from "@/slices/proposalsSlice";
import CreateProposalForm from "./CreateProposalForm";

const CreateProposalModal = () => {
  const dispatch = useAppDispatch();

  const closeConnectWalletModal = (e: any) => {
    if (e.currentTarget.dataset.close) {
      dispatch(proposalActions.toggleCreateProposalModal(false));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 1, x: "-100%" }}
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
        <CreateProposalForm />
      </div>
    </motion.div>
  );
};

export default CreateProposalModal;
