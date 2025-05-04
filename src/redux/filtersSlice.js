import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};
const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const filtersReducer = slice.reducer;
export const { changeFilter } = slice.actions;

// const FilterContact = itemContact.filter((item) =>
//   item.name.toLowerCase().includes(FilterContactNew.toLowerCase())
// );
