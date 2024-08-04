"use client";
import { useAppDispatch } from "@/hooks/customHook";
import { proposalActions } from "@/slices/proposalsSlice";
import React, { useState } from "react";

const CreateProposalForm = () => {
  const dispatch = useAppDispatch();

  const [proposalTitle, setProposalTitle] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const dateContainerStyle = "flex w-[45%] flex-col";
  const labelStyle = "mb-[1rem] font-londrinaSolid";
  const inputDateClassName =
    "rounded-xl p-[1rem] text-color-gray-1 ring-0 outline-none focus:ring-0 focus:outline-none  font-ptSans ";

  const createProposalHandler = (e: any) => {
    e.preventDefault();

    if (!proposalTitle || !startDate || !endDate) {
      return;
    }

    const proposal = {
      id: `${proposalTitle}-${Math.random().toFixed(10)}`,
      title: proposalTitle,
      startTime: startDate,
      endTime: endDate,
    };

    dispatch(proposalActions.toggleCreateProposalModal(false));
    dispatch(proposalActions.createProposal(proposal));
  };

  return (
    <div>
      <form onSubmit={createProposalHandler}>
        <div className="flex flex-col w-full">
          <label htmlFor="proposal-title" className={labelStyle}>
            Proposal Title
          </label>
          <input
            id="proposal-title"
            name="proposal-title"
            placeholder="Proposal Title"
            value={proposalTitle}
            onChange={(e: any) => {
              setProposalTitle(e.target.value);
            }}
            className="p-[1rem] rounded-xl ring-0 outline-none focus:ring-0 focus:outline-none text-color-gray-1"
          />
        </div>
        <div className="flex justify-between mt-[2rem] ">
          <div className={dateContainerStyle}>
            <label htmlFor="start-date" className={labelStyle}>
              Start Date
            </label>
            <input
              type="date"
              name="start-date"
              id="start-date"
              min={new Date().toISOString().split("T")[0]}
              value={startDate}
              onChange={(e: any) => {
                console.log(e.target.value);
                setStartDate(e.target.value);
              }}
              className={inputDateClassName}
            />
          </div>
          <div className={dateContainerStyle}>
            <label htmlFor="end-date" className={labelStyle}>
              End Date
            </label>
            <input
              type="date"
              name="end-date"
              id="end-date"
              value={endDate}
              min={startDate}
              onChange={(e: any) => {
                setEndDate(e.target.value);
              }}
              className={inputDateClassName}
            />
          </div>
        </div>
        <button
          type="submit"
          className="py-[1rem] text-center bg-color-gray-1 text-color-white rounded-xl border-color-gray-1 border w-full mt-[3rem] mb-[1.5rem] font-londrinaSolid hover:bg-color-white hover:text-color-gray-1 transition-all ease-in duration-150"
        >
          Create Proposal
        </button>
      </form>
    </div>
  );
};

export default CreateProposalForm;
