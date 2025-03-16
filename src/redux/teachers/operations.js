import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "../../firebase/firebase";
import {
  endAt,
  equalTo,
  get,
  orderByChild,
  query,
  ref,
  remove,
  set,
  startAt,
} from "firebase/database";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async (_, thunkAPI) => {
    try {
      const collectionRef = ref(db, "teachers");
      const teachersQuery = query(collectionRef);
      const teachersSnapshot = await get(teachersQuery);
      const data = teachersSnapshot.exists()
        ? Object.values(teachersSnapshot.val())
        : [];

      return data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTeachersByFilter = createAsyncThunk(
  "teachers/fetchTeachersByFilter",
  async (filter, { thunkAPI }) => {
    let teachersQuery;
    const collectionRef = ref(db, "teachers");

    try {
      if (filter.name === "price_per_hour") {
        const minPrice = Number(filter.value);
        const maxPrice = Number(filter.value) + 10;
        teachersQuery = query(
          collectionRef,
          orderByChild(filter.name),
          startAt(minPrice),
          endAt(maxPrice)
        );
      } else {
        teachersQuery = query(
          collectionRef,
          orderByChild(`${filter.name}/${filter.value}`),
          equalTo(true)
        );
      }
      const filteredTeachers = await get(teachersQuery);
      const data = filteredTeachers.exists()
        ? Object.values(filteredTeachers.val())
        : [];
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addAndRemoveFavoriteTeacher = createAsyncThunk(
  "teachers/addFavorite",
  async (teacher, { rejectWithValue }) => {
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
        return teacher;
      } else {
        await set(
          ref(db, `users/${userId}/favoriteTeachers/${teacher.id}`),
          teacher
        );
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
