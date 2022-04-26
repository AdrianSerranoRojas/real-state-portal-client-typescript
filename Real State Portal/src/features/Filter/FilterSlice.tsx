import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPropertiesFiltered } from "../../services/APIrequests";

export const fetchProperties = createAsyncThunk(
  "filter/fetchProperties",
  (string) => {
    // return a Promise containing the data we want
    return getPropertiesFiltered(string);
  }
);

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    value: "",
    realProperties: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    apiFilter: (state, action) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.realProperties = action.payload;
      return state;
    },
    setSearch: (state, action) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.value = action.payload;
      return state;
    },
  },
});

export const { apiFilter, setSearch } = filterSlice.actions;

export const filterSelector = (state) => state.filter;
