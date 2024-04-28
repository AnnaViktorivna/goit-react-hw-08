import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { apiAddContacts, apiGetContacts } from "./operations";

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

      .addCase(apiGetContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(apiAddContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.push(action.payload);
        // state.contacts = [...state.contacts, action.payload];
      })
      .addMatcher(
        isAnyOf(apiGetContacts.pending, apiAddContacts.pending),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(apiGetContacts.rejected, apiAddContacts.rejected),
        (state) => {
          state.isLoading = false;
          state.isError = true;
        }
      );
  },
});

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
