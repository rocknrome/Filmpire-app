import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = "2e2cdc89526f48f50dbe44484d5668aa";

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    // Get popular movies
    getMovies: builder.query({
      query: (page) => `movie/popular?page=${page}&api_key=${tmdbApiKey}`,
      transformResponse: (response) => response.results,
    }),
  }),
});

export const { useGetMoviesQuery } = tmdbApi;
