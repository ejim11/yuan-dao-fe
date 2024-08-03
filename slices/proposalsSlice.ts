import { createSlice } from "@reduxjs/toolkit";
import proposals from "@/components/data/proposalData";

const proposalSlice = createSlice({
  name: "proposal",
  initialState: {
    proposals: proposals,
    // proposals: [],
  },
  reducers: {
    createProposal: (state, action) => {},
  },
});

export const walletActions = proposalSlice.actions;

export default proposalSlice;
