import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSlice",
  initialState: {
    showGptSearch: false,
    searchResults: null
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptSearchResult: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const { toggleGptSearchView, addGptSearchResult } = gptSlice.actions;

export default gptSlice.reducer;
