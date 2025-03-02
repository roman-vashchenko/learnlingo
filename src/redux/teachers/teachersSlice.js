import { createSlice } from "@reduxjs/toolkit";
import { fetchFavoriteTeachers, fetchTeachers } from "./operations";

const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    items: [],
    favoriteItems: [],
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
      })
      .addCase(fetchFavoriteTeachers.pending, (state) => {
        state.isLoader = false;
      })
      .addCase(fetchFavoriteTeachers.fulfilled, (state, { payload }) => {
        state.isLoader = false;
        state.favoriteItems = [...payload];
        console.log(state.favoriteItems);
      })
      .addCase(fetchFavoriteTeachers.rejected, (state, { payload }) => {
        state.isLoader = false;
        state.error = payload;
      });
  },
});

export const teachersReducer = teachersSlice.reducer;
