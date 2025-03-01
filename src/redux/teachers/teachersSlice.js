import { createSlice } from "@reduxjs/toolkit";
import { fetchTeachers } from "./operations";

const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    items: [],
    isLoader: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachers.pending, (state) => {
        state.error = null;
        state.isLoader = true;
      })
      .addCase(fetchTeachers.fulfilled, (state, { payload }) => {
        state.isLoader = false;
        state.items = payload;
      })
      .addCase(fetchTeachers.rejected, (state, { payload }) => {
        state.isLoader = false;
        state.error = payload;
      });
  },
});

export const teachersReducer = teachersSlice.reducer;
