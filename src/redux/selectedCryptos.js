import { createSlice } from "@reduxjs/toolkit";
import { getFromLocalStorage, saveToLocalStorage } from "../utils";

const selectedCryptosSlice = createSlice({
  name: "selectedCryptos",
  initialState: {
    selectedCryptos: getFromLocalStorage("selectedCryptos") ?? [],
  },
  reducers: {
    add: (state, action) => {
      state.selectedCryptos.push(action.payload);
      state.selectedCryptos = [...state.selectedCryptos, action.payload];
      saveToLocalStorage("selectedCryptos", state.selectedCryptos);
    },
    remove: (state, action) => {
      state.selectedCryptos = state.selectedCryptos.filter(
        (crypto) => crypto.id !== action.payload
      );
      saveToLocalStorage("selectedCryptos", state.selectedCryptos);
    },
  },
});

export const { add, remove } = selectedCryptosSlice.actions;
export default selectedCryptosSlice.reducer;
