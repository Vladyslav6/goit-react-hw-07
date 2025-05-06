import { createSlice, isAnyOf } from "@reduxjs/toolkit";
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

  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsData.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
      })
      .addCase(deleteContactData.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(addContactDataThunk.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      })
      //
      //
      //
      .addMatcher(
        isAnyOf(
          fetchContactsData.rejected,
          (deleteContactData.rejected, addContactDataThunk.rejected)
        ),
        (state, action) => {
          state.contacts.error = action.payload;
        }
      )

      .addMatcher(
        isAnyOf(
          fetchContactsData.pending,
          (deleteContactData.pending, addContactDataThunk.pending)
        ),
        (state, action) => {
          state.contacts.Loading = true;
          state.contacts.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactsData.fulfilled,
          (deleteContactData.fulfilled, addContactDataThunk.fulfilled)
        ),
        (state, action) => {
          state.contacts.Loading = false;
        }
      );
  },
});

export const selectContacts = (state) => state.item.contacts.items;
export const selectError = (state) => state.item.contacts.error;
export const selectLoading = (state) => state.item.contacts.Loading;

export const {
  addContact,
  deleteContact,
  dataConactsOperations,
  setLoading,
  setError,
} = slice.actions;
export const contactSlice = slice.reducer;
