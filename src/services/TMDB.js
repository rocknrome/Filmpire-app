import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = "7a7fa3103a4d7a9297a6f26db76beb83";

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
