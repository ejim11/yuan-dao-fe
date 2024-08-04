"use client";
import { useAppSelector } from "@/hooks/customHook";
import React from "react";
import { Proposal } from "./data/proposalData";

const ProposalDetail = ({ slug }: { slug: string }) => {
  const proposal = useAppSelector((state) => state.proposal.proposals).filter(
    (proposal: Proposal) => proposal.slug === slug
  )[0];
  return (
    <div>
      <p>{proposal.title}</p>
    </div>
  );
};

export default ProposalDetail;
