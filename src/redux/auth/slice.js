import { createSlice } from "@reduxjs/toolkit";

import {
  fetchApiRegister,
  fetchApiLogIn,
  fetchApiRefreshUser,
} from "./operations";

const INITIAL_STATE = {
  isLoggedIn: false,
  userData: null,
  token: null,
  isLoading: false,
  isError: false,
};

export const authSlice = createSlice({
  // Ім'я слайсу
  name: "auth", // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE, // Об'єкт редюсерів
  extraReducers: (builders) => {
    builders
      .addCase(fetchApiRegister.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchApiRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(fetchApiRegister.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchApiLogIn.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchApiLogIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(fetchApiLogIn.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchApiRefreshUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchApiRefreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload;
      })
      .addCase(fetchApiRefreshUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

// Редюсер слайсу
export const authReducer = authSlice.reducer;
