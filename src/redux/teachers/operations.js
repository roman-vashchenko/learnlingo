import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "../../firebase/firebase";
import {
  equalTo,
  get,
  orderByChild,
  query,
  ref,
  remove,
  set,
} from "firebase/database";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async (filter, thunkAPI) => {
    let data;
    try {
      const collectionRef = ref(db, "teachers");
      if (filter) {
        const teachersQueryOnFilter = query(
          collectionRef,
          orderByChild(`${filter.name}/${filter.value}`),
          equalTo(true)
        );
        const filteredTheachers = await get(teachersQueryOnFilter);
        data = Object.values(filteredTheachers.val());
        return data;
      } else {
        const teachersQuery = query(collectionRef);
        const teachers = await get(teachersQuery);
        data = teachers.val();
        return data;
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
