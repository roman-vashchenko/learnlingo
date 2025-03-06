import { createSlice } from "@reduxjs/toolkit";
import {
  addAndRemoveFavoriteTeacher,
  fetchFavoriteTeachers,
  fetchTeachers,
} from "./operations";

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
      .addCase(addAndRemoveFavoriteTeacher.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(addAndRemoveFavoriteTeacher.fulfilled, (state, { payload }) => {
        state.isLoader = false;
        const exists = state.favoriteItems.some((t) => t.id === payload.id);
        if (exists) {
          state.favoriteItems = state.favoriteItems.filter(
            (teacher) => teacher.id !== payload.id
          );
        } else {
          state.favoriteItems.push(payload);
        }
      })
      .addCase(addAndRemoveFavoriteTeacher.rejected, (state) => {
        state.isLoader = false;
      })
      .addCase(fetchFavoriteTeachers.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(fetchFavoriteTeachers.fulfilled, (state, { payload }) => {
        state.isLoader = false;
        if (payload) {
          state.favoriteItems = payload;
        }
      })
      .addCase(fetchFavoriteTeachers.rejected, (state, { payload }) => {
        state.isLoader = false;
        state.error = payload;
      });
  },
});

export const teachersReducer = teachersSlice.reducer;
