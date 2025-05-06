import axios from "axios";
import { dataConactsOperations, setError, setLoading } from "./ContactSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://68188cec5a4b07b9d1cfb0b6.mockapi.io";

export const fetchContactsData = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactData = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactDataThunk = createAsyncThunk(
  "contacts/addContact",
  async (body, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", body);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
