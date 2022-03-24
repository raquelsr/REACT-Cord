import React from 'react';
import styled from 'styled-components';

import * as colors from '../../css/constants/colors';

export default function MovieItem({ movie, genres }) {
  return (
    // TODO: Complete the MovieItem component
    <MovieItemWrapper>
      <LeftCont>
        <ImgCont image={movie.imageUrl}></ImgCont>
      </LeftCont>
      <RightCont>
        <Title>{movie.title}</Title>
        <Vote>{movie.vote_average}</Vote>
        <Genres>{movie.genre_names.join(' | ')}</Genres>
        <Overview>{movie.overview}</Overview>
        <ReleaseDate>{movie.release_date}</ReleaseDate>
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
  height: 230px;
`;

const LeftCont = styled.div`
  display: inline-block;
`;

const ImgCont = styled.div`
  display: inline-block;
  width: 150px;
  height: 230px;
  background-image: url('${(props) => props.image}');
`;

const RightCont = styled.div`
  display: inline-block;
  margin-left: 20px;
`;

const Title = styled.h2`
  font-size: 1.4;
  margin-top: 0;
  margin-bottom: 10px;
  max-width: calc(100% - 40px);
`;

const Genres = styled.h5`
  font-size: 1.4;
  margin-top: 0;
  color: ${colors.primaryColor};
  font-weight: 400;
`;

const Vote = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  background: ${colors.primaryColor};
  padding: 2px 4px;
  color: ${colors.lightBackground};
  border-radius: 4px;
  min-width: 22px;
  text-align: center;
`;

const Overview = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box !important;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  max-height: calc(100% - 150px);
`;

const ReleaseDate = styled.div`
  color: ${colors.primaryColor};
  font-size: 14px;
  font-weight: 100;
  position: absolute;
  bottom: 16px;
`;
