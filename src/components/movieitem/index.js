import React from 'react';
import styled from 'styled-components';

export default function MovieItem({ movie, genres }) {
  return (
    // TODO: Complete the MovieItem component
    <MovieItemWrapper>
      <LeftCont>
        <ImgCont src="https://image.tmdb.org/t/p/original/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg"></ImgCont>
      </LeftCont>
      <RightCont>
        <Title>{movie.title}</Title>
        <Vote>{movie.vote_average}</Vote>
        <p>{movie.genre_ids}</p>
        <Overview>{movie.overview}</Overview>
      </RightCont>
    </MovieItemWrapper>
  );
}

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  margin: 15px 0;
  display: flex;
  flex-direction: row;
  height: 250px;
`;

const LeftCont = styled.div`
  display: inline-block;
`;

const ImgCont = styled.div`
  display: inline-block;
  border: 1px solid red;
  width: 150px;
  height: 250px;
`;

const RightCont = styled.div`
  display: inline-block;
  margin-left: 20px;
`;

const Title = styled.h2`
  font-size: 1.4;
  margin-top: 0;
`;

const Vote = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  background: yellow;
  padding: 6px;
`;

const Overview = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box !important;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;
