"use client";
import React from "react";
import { Proposal } from "./data/proposalData";
import calculateDifferenceInDays from "./utils/calculateDifferenceInDate";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ProposalItem = ({ id, title, startTime, endTime, index, slug }: any) => {
  const router = useRouter();

  const btnStylings: any = {
    pending: "bg-color-green ",
    active: "bg-color-blue",
    completed: "bg-color-gold",
  };

  const calculatedTime = calculateDifferenceInDays(
    new Date(startTime).toDateString(),
    new Date(endTime).toDateString()
  );

  const status = calculatedTime
    ? calculatedTime.includes("End")
      ? "active"
      : "pending"
    : "completed";

  const navigateToProposalDetailHandler = () => {
    router.push(`/${slug}`);
  };

  return (
    <motion.li
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 * id }}
      viewport={{ once: true }}
      className="w-full flex items-center border border-color-border p-[2rem] mb-[2rem] rounded-xl bg-color-gray-3 hover:bg-color-white duration-150 ease-in transition-all cursor-pointer"
      onClick={navigateToProposalDetailHandler}
    >
      <p className="text-color-gray-2 text-[1.8rem] font-medium mr-[1.5rem]">
        {index + 1}
      </p>
      <p className="flex-1 text-[2rem] font-semibold">{title}</p>

      {calculatedTime && (
        <p className="flex items-center bg-[rgba(140,141,146,0.1)] p-[1rem] border-color-border rounded-xl text-color-gray-2">
          <MdOutlineAccessTimeFilled className="mr-[1rem]" />
          {calculatedTime}
        </p>
      )}

      <p
        className={`ml-[2rem] border px-[1rem] py-[0.5rem] rounded-xl capitalize text-color-white ${btnStylings[status]}`}
      >
        {status}
      </p>
    </motion.li>
  );
};

export default ProposalItem;
