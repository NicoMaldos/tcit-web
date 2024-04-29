import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  filteredValue: [],
  isLoading: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    define: (state, action) => {
      state.value = action.payload;
      state.filteredValue = action.payload;
      state.isLoading = false;
    },
    filter: (state, action) => {
      state.filteredValue = action.payload;
      state.isLoading = false;
    },
  },
});

export const { define, filter } = postsSlice.actions;

export default postsSlice.reducer;
