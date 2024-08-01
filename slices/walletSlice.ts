import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    isWalletModalOpen: false,
  },
  reducers: {
    toggleWalletModal: (state, _) => {
      state.isWalletModalOpen = !state.isWalletModalOpen;
    },
  },
});

export const walletActions = walletSlice.actions;

export default walletSlice;
