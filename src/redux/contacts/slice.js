import { createSlice } from "@reduxjs/toolkit";
import { apiGetContacts } from "./operations";

const INITIAL_STATE = {
  contacts: null,
  isLoading: false,
  isError: false,
};

export const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contacts", // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE, // Об'єкт редюсерів
  extraReducers: (builders) => {
    builders
      .addCase(apiGetContacts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiGetContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(apiGetContacts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
