import { createAsyncThunk } from "@reduxjs/toolkit";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../../firebase/firebase";
import { get, ref, set } from "firebase/database";

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ name, user }, thunkAPI) => {
    try {
      await set(ref(db, `users/${user.uid}`), {
        name,
        email: user.email,
        createdAt: new Date().toISOString(),
      });
      const userRef = ref(db, `users/${user.uid}`);
      const snapshot = await get(userRef);
      const userData = snapshot.val();
      return userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async ({ user }, thunkAPI) => {
    try {
      const userRef = ref(db, `users/${user.uid}`);
      const snapshot = await get(userRef);
      const userData = snapshot.val();

      return userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          try {
            const userRef = ref(db, `users/${user.uid}`);
            const snapshot = await get(userRef);
            const userData = snapshot.val();
            resolve(userData);
          } catch (error) {
            resolve(thunkAPI.rejectWithValue(error.message));
          }
        } else {
          resolve(null);
        }
      });
    });
  }
);
