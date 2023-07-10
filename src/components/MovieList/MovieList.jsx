import React from 'react';
import { Grid } from '@mui/material';
import useStyles from './styles';
import Movie from '../Movie/Movie';

const MovieList = ({ movies }) => {
  const classes = useStyles();

  if (!movies || movies.length === 0) {
    return null;
  }

  return (
    <Grid container className={classes.moviesContainer} justifyContent="center">
      {movies.map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default MovieList;
