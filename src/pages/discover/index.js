import React from 'react';
import styled from 'styled-components';

import * as colors from '../../css/constants/colors';
import { device } from '../../css/constants/sizes';
import { Fetcher } from '../../fetcher';

import SearchFilters from '../../components/searchfilter';
import MovieList from '../../components/movielist';

export default class Discover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
      year: 0,
      results: [],
      totalCount: 0,
      genreOptions: [],
      ratingOptions: [
        { id: 7.5, name: 7.5 },
        { id: 8, name: 8 },
        { id: 8.5, name: 8.5 },
        { id: 9, name: 9 },
        { id: 9.5, name: 9.5 },
        { id: 10, name: 10 },
      ],
      languageOptions: [
        { id: 'GR', name: 'Greek' },
        { id: 'EN', name: 'English' },
        { id: 'RU', name: 'Russian' },
        { id: 'PO', name: 'Polish' },
      ],
    };
  }

  // TODO: Preload and set the popular movies and movie genres when page loads

  // TODO: Update search results based on the keyword and year inputs

  componentDidMount() {
    Fetcher.getAllMovies().then((res) => {
      console.log(res);
      this.setState({
        results: res.data.results,
        totalCount: res.data.total_results,
      });
    });
  }

  render() {
    const {
      genreOptions,
      languageOptions,
      ratingOptions,
      totalCount,
      results,
    } = this.state;

    return (
      <DiscoverWrapper>
        <MobilePageTitle>Discover</MobilePageTitle>{' '}
        {/* MobilePageTitle should become visible on mobile devices via CSS media queries*/}
        <MovieFilters>
          <SearchFilters
            genres={genreOptions}
            ratings={ratingOptions}
            languages={languageOptions}
            searchMovies={(keyword, year) => this.searchMovies(keyword, year)}
          />
        </MovieFilters>
        <TotalCount>{Number(totalCount).toLocaleString()} results</TotalCount>
        <MovieResults>
          <MovieList movies={results || []} genres={genreOptions || []} />
        </MovieResults>
      </DiscoverWrapper>
    );
  }
}

const DiscoverWrapper = styled.main`
  padding: 35px;
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    display: block;
  }
`;

const MovieResults = styled.div`
  display: inline-block;

  @media ${device.laptop} {
    width: calc(100% - 295px);
  }
`;

const MovieFilters = styled.div`
  width: 280px;
  float: right;
  margin-top: 15px;
`;

const MobilePageTitle = styled.h1`
  margin: 3px 0 15px 60px;

  @media ${device.laptop} {
    display: none;
  }
`;

const TotalCount = styled.strong`
  display: block;
`;
