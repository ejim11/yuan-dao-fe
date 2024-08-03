import { configureStore } from "@reduxjs/toolkit";
import walletSlice from "./slices/walletSlice";
import proposalSlice from "./slices/proposalsSlice";

const store = configureStore({
  reducer: {
    wallet: walletSlice.reducer,
    proposal: proposalSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
