import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, registerUser } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    error: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.user = null;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        if (action.payload) {
          state.isLoggedIn = true;
          state.user = action.payload;
          state.isLoading = false;
          state.isRefreshing = false;
        } else {
          state.isLoggedIn = false;
          state.user = null;
        }
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
