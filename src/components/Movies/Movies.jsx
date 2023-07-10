import React, { useEffect } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useGetMoviesQuery } from '../../services/TMDB';
import MovieList from '../MovieList/MovieList';

const Movies = () => {
  const page = 1; // Set the desired page number here
  const { data, error, isFetching, refetch } = useGetMoviesQuery(page);

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  console.log(data); // Log the data object

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          An error occurred while fetching movies.
          <br />
          Please try again later.
        </Typography>
      </Box>
    );
  }

  return (
    <div style={{ marginLeft: '250px' }}>
      {data && data.length > 0 ? (
        <MovieList movies={data} />
      ) : (
        <Box display="flex" alignItems="center" mt="20px">
          <Typography variant="h4">
            No movies found.
            <br />
            Please try again later.
          </Typography>
        </Box>
      )}
    </div>
  );
};

export default Movies;
