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

export const addAndRemoveFavoriteTeacher = createAsyncThunk(
  "teachers/addFavorite",
  async ({ teacher }, { rejectWithValue }) => {
    try {
      const userId = auth.currentUser.uid;
      const teachersRef = ref(db, `users/${userId}/favoriteTeachers`);
      const snapshot = await get(teachersRef);
      const data = snapshot.val();
      const exists =
        data && Object.values(data).some((t) => t.id === teacher.id);

      if (exists) {
        const teacherRef = ref(
          db,
          `users/${userId}/favoriteTeachers/${teacher.id}`
        );
        await remove(teacherRef);
        return { ...teacher };
      } else {
        await set(ref(db, `users/${userId}/favoriteTeachers/${teacher.id}`), {
          ...teacher,
        });
        return teacher;
      }
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
      const data = snapshot.val();

      const arrData = data ? Object.values(data) : [];

      return arrData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
