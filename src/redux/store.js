import { configureStore } from "@reduxjs/toolkit";
import { teachersReducer } from "./teachers/teachersSlice";
import { authReducer } from "./auth/authSlice";
import { filterReducer } from "./filter/filterSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    teachers: teachersReducer,
    filter: filterReducer,
  },
});
