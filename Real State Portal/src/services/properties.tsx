import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const propertiesApi = createApi({
  reducerPath: "propertiesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004/" }),
  endpoints: (builder) => ({
    getProperties: builder.query({
      query: (valueSplit) => `properties?${valueSplit}`,
    }),
  }),
});

export const { useGetPropertiesQuery } = propertiesApi;
