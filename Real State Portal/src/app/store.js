import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "../features/Filter/FilterSlice";

import { setupListeners } from "@reduxjs/toolkit/query";
import { propertiesApi } from "../services/properties";

export const store = configureStore({
  reducer: {
    [propertiesApi.reducerPath]: propertiesApi.reducer,
    filter: filterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(propertiesApi.middleware),
});

setupListeners(store.dispatch);
