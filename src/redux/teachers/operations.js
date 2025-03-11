import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "../../firebase/firebase";
import {
  endAt,
  equalTo,
  get,
  limitToFirst,
  orderByChild,
  query,
  ref,
  remove,
  set,
  startAt,
} from "firebase/database";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async (filter, thunkAPI) => {
    try {
      const collectionRef = ref(db, "teachers");

      let data;
      // let lastKey = null;
      let teachersQuery;

      //Data filtering
      if (filter) {
        if (filter.name === "price_per_hour") {
          const minPrice = Number(filter.value);
          const maxPrice = Number(filter.value) + 10;
          console.log(maxPrice);
          teachersQuery = query(
            collectionRef,
            orderByChild(filter.name),
            startAt(minPrice),
            endAt(maxPrice),
            limitToFirst(5)
          );
        } else {
          teachersQuery = query(
            collectionRef,
            orderByChild(`${filter.name}/${filter.value}`),
            equalTo(true),
            limitToFirst(5)
          );
        }
        const filteredTeachers = await get(teachersQuery);
        data = filteredTeachers.val()
          ? Object.values(filteredTeachers.val())
          : [];
        return data;
      } else {
        // Normal data upload
        teachersQuery = query(collectionRef, limitToFirst(5));
        const teachersSnapshot = await get(teachersQuery);

        // if (teachersSnapshot.exists()) {
        //
        //   const num = teachersSnapshot.numChildren();
        //   console.log("Number of children: ", num);
        // } else {
        //   console.log("No data available");
        // }
        data = teachersSnapshot.val();
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
