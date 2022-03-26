import MovieItem from '../movieitem';
import React from 'react';
import styled from 'styled-components';

export default function MovieList({ movies, genres }) {
  return (
    <MoviesWrapper>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} genres={genres} />
      ))}
    </MoviesWrapper>
  );
}

const MoviesWrapper = styled.div`
  position: relative;
`;
