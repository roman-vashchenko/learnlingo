import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "../../firebase/firebase";
import {
  endAt,
  equalTo,
  get,
  limitToFirst,
  orderByChild,
  orderByKey,
  query,
  ref,
  remove,
  set,
  startAfter,
  startAt,
} from "firebase/database";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async (filter, thunkAPI) => {
    const { lastKey } = thunkAPI.getState().teachers;
    try {
      const collectionRef = ref(db, "teachers");

      let data;
      let totalTeachers;
      let teachersQuery;

      if (lastKey) {
        teachersQuery = query(
          collectionRef,
          orderByKey(),
          startAfter(String(lastKey)),
          limitToFirst(5)
        );
        const teachersSnapshot = await get(teachersQuery);
        data = teachersSnapshot.exists()
          ? Object.values(teachersSnapshot.val())
          : [];
        const newlastKey = data.length > 0 ? data[data.length - 1].id : null;
        return { data, totalTeachers, lastKey: newlastKey };
      } else {
        const totalTeachersQuery = await get(collectionRef);
        totalTeachers = totalTeachersQuery.exists()
          ? Object.values(totalTeachersQuery.val())
          : 0;

        teachersQuery = query(collectionRef, limitToFirst(5));
        const teachersSnapshot = await get(teachersQuery);
        data = teachersSnapshot.exists()
          ? Object.values(teachersSnapshot.val())
          : [];

        const newlastKey = data.length > 0 ? data[data.length - 1].id : null;
        return {
          data,
          totalTeachers: totalTeachers.length,
          lastKey: newlastKey,
        };
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTeachersByFilter = createAsyncThunk(
  "teachers/fetchTeachersByFilter",
  async (filter, { thunkAPI }) => {
    let data;
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
      data = filteredTeachers.exists()
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
