import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "../../firebase/firebase";
import { get, limitToFirst, query, ref, remove, set } from "firebase/database";

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

export const addFavoriteTeacher = createAsyncThunk(
  "teachers/addFavorite",
  async ({ teacher, idx }, { rejectWithValue }) => {
    try {
      const userId = auth.currentUser.uid;
      const teachersRef = ref(db, `users/${userId}/favoriteTeachers`);
      const snapshot = await get(teachersRef);
      const teachersData = snapshot.val();
      const exists =
        Array.isArray(teachersData) &&
        teachersData.some((teacher) => teacher.id === idx);
      if (exists) {
        const teacherRef = ref(db, `users/${userId}/favoriteTeachers/${idx}`);
        await remove(teacherRef);
        return;
      }
      await set(ref(db, `users/${userId}/favoriteTeachers/${idx}`), {
        id: idx,
        ...teacher,
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchFavoriteTeachers = createAsyncThunk(
  "teachers/fetchFavorite",
  async (_, { rejectWithValue }) => {
    try {
      const userId = auth.currentUser.uid;

      const teachersRef = ref(db, `users/${userId}/favoriteTeachers`);
      const snapshot = await get(teachersRef);
      const teachersData = snapshot.val();

      const updatedTeachers = Array.isArray(teachersData)
        ? teachersData.filter(Boolean)
        : [];

      return updatedTeachers;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
