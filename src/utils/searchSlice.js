import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      return (state = { ...action.payload, ...state }); // the last spread wins if both have same keys
    },
  },
});

export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducer;
