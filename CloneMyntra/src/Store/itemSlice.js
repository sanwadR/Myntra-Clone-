import { createSlice, configureStore } from "@reduxjs/toolkit";
import { DEFAULT_ITEM } from "../data/items";
const itemsSlice = createSlice({
  name: "item",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    },
  },
});

export const itemsAction = itemsSlice.actions;
export default itemsSlice;
