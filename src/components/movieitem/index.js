import { device } from '../../css/constants/sizes';
import { Fetcher } from '../../fetcher';
import * as colors from '../../css/constants/colors';
import React from 'react';
import styled from 'styled-components';

export default function MovieItem({ movie, genres }) {
  const getImageUrl = () => `${Fetcher.IMAGE_URL}${movie.poster_path}`;

  const getGenres = () => {
    const genresNames = [];
    for (const genreId of movie.genre_ids) {
      const genre = genres.find((genre) => genre.id === genreId)?.name;
      if (genre) genresNames.push(genre);
    }
    return genresNames;
  };

  return (
    // TODO: Complete the MovieItem component
    <MovieItemWrapper>
      <LeftCont>
        <img src={getImageUrl()} alt="Movie poster" />
      </LeftCont>
      <RightCont>
        <Title>{movie.title}</Title>
        <Vote>{movie.vote_average}</Vote>
        <Genres>{getGenres().join(' | ')}</Genres>
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

  & img {
    display: inline-block;
    width: 150px;
    height: 230px;
  }
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
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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

  @media ${device.mobileS} {
    display: none;
  }
`;

const Overview = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box !important;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  @media ${device.laptop} {
    -webkit-line-clamp: 4;
    height: calc(100% - 140px);
  }
`;

const ReleaseDate = styled.div`
  color: ${colors.primaryColor};
  font-size: 14px;
  font-weight: 100;
  position: absolute;
  bottom: 16px;
`;
