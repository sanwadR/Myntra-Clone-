import { createSlice, configureStore } from "@reduxjs/toolkit";
import { DEFAULT_ITEM } from "../data/items";
const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload); // Modify the array in place
    },
    removeFromBag: (state, action) => {
      return state.filter((itemId) => itemId !== action.payload);
    },
  },
});

export const bagAction = bagSlice.actions;
export default bagSlice;
