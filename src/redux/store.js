import { configureStore } from "@reduxjs/toolkit";
import cryptosReducer from "./cryptosSlice";
import selectedCryptosReducer from "./selectedCryptos"; // Ensure you import the correct slice

export const store = configureStore({
  reducer: {
    cryptosReducer,
    selectedCryptos: selectedCryptosReducer,
  },
});

export default store;
