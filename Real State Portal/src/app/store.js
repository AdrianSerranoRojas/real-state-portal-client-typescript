import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "../features/Filter/FilterSlice";

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
  },
});

