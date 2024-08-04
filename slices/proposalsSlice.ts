import { createSlice } from "@reduxjs/toolkit";
import proposals from "@/components/data/proposalData";

const proposalSlice = createSlice({
  name: "proposal",
  initialState: {
    proposals: proposals,
    isCreateProposalModalOpen: false,
    // proposals: [],
  },
  reducers: {
    createProposal: (state, action) => {
      if (!action.payload) {
        return;
      }
      state.proposals = [action.payload, ...state.proposals];
    },
    toggleCreateProposalModal: (state: any, action: { payload: boolean }) => {
      state.isCreateProposalModalOpen = action.payload;
    },
  },
});

export const proposalActions = proposalSlice.actions;

export default proposalSlice;
