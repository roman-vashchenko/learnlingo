import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    name: null,
    value: null,
  },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.name = payload.name;
      state.value = payload.value;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
