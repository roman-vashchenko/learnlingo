import { configureStore } from "@reduxjs/toolkit";
import { teachersReducer } from "./teachers/teachersSlice";
import { authReducer } from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    teachers: teachersReducer,
  },
});
