import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'dummyJsonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (searchTerm = "") => `/products/search?q=${searchTerm}`,
    }),
  }),
});

export const { useGetProductsQuery } = productApi;