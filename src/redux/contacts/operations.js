import { createAsyncThunk } from "@reduxjs/toolkit";

import { instance } from "../auth/operations";

export const apiGetContacts = createAsyncThunk(
  "contacts/getAllContacts",
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get("/contacts");
      console.log("Contacts data", data);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
