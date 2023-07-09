import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const tmdbApiKey = "7a7fa3103a4d7a9297a6f26db76beb83";

//console.log('TMDB_KEY:', tmdbApiKey);

const page = 1;
//GET https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
    endpoints: (builder) => ({
        //*Get movies by [Type]
        getMovies: builder.query({
            query: () => `movie/popular?page=${page}&api_key=${tmdbApiKey}`,
            transformResponse: (response) => response.results, // Extract the 'results' property from the response object
          }),
        }),
    });
export const {
    useGetMoviesQuery
} = tmdbApi;