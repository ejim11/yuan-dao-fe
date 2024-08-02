import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    isWalletModalOpen: false,
    account: "",
  },
  reducers: {
    toggleWalletModal: (state: any, action: { payload: boolean }) => {
      state.isWalletModalOpen = action.payload;
    },
    setAccount: (state: any, action: { payload: string }) => {
      state.account = action.payload;
    },
  },
});

export const walletActions = walletSlice.actions;

export default walletSlice;
