import { createSlice, configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemSlice";
import fetchingStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchingStatusSlice.reducer,
    bag: bagSlice.reducer,
  },
});

export default myntraStore;
