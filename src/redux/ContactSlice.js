import { createSlice } from "@reduxjs/toolkit";

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
});

export const {
  addContact,
  deleteContact,
  dataConactsOperations,
  setLoading,
  setError,
} = slice.actions;
export const contactSlice = slice.reducer;
