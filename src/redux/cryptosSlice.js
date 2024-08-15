// src/redux/cryptosSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cryptosSlice = createSlice({
  name: "cryptos",
  initialState: {
    cryptos: [],
    loading: false,
    error: null,
  },
  reducers: {
    add: (state, action) => {
      state.cryptos = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { add, setLoading, setError } = cryptosSlice.actions;
export default cryptosSlice.reducer;
