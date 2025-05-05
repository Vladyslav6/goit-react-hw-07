import { createSlice } from "@reduxjs/toolkit";
import {
  addContactDataThunk,
  deleteContactData,
  fetchContactsData,
} from "./contactsOps";

const initialState = {
  contacts: {
    items: [],
    Loading: false,
    error: null,
  },
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        (item) => item.id !== action.payload
      );
    },
    dataConactsOperations: (state, action) => {
      state.contacts.items = action.payload;
    },
    setLoading: (state, action) => {
      state.contacts.Loading = action.payload;
    },
    setError: (state, action) => {
      state.contacts.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsData.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
      })
      .addCase(fetchContactsData.rejected, (state, action) => {
        state.contacts.error = action.payload;
      })
      .addCase(deleteContactData.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(addContactDataThunk.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      });
  },
});

export const {
  addContact,
  deleteContact,
  dataConactsOperations,
  setLoading,
  setError,
} = slice.actions;
export const contactSlice = slice.reducer;
