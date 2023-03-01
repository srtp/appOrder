/* eslint-disable import/extensions */
// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { InfoFoods } from '../../models/interfaces/TypeFood';

// Define a service using a base URL and expected endpoints
export const foodApi = createApi({
  reducerPath: 'foodApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://next-api-foods.vercel.app/api/' }),
  endpoints: (builder) => ({
    getAllData: builder.query<InfoFoods[], void>({
      query: () => 'food',
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllDataQuery } = foodApi;
