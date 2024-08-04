"use client";
import ProposalDetail from "@/components/ProposalDetail";
import React from "react";

const page = ({ params }: { params: { proposal: string } }) => {
  return (
    <div>
      <ProposalDetail slug={params.proposal} />
    </div>
  );
};

export default page;
