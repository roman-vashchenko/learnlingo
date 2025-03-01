import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase/firebase";
import { get, limitToFirst, query, ref } from "firebase/database";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async (_, thunkAPI) => {
    try {
      const collectionRef = ref(db, "teachers");
      const teachersQuery = query(collectionRef, limitToFirst(5));
      const data = await get(teachersQuery);
      if (data.exists()) {
        return data.val();
      } else {
        console.log("Collection not found");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
