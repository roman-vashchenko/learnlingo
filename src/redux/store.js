import { configureStore } from "@reduxjs/toolkit";
import { teachersReducer } from "./teachers/teachersSlice";

export const store = configureStore({
  reducer: { teachers: teachersReducer },
});
