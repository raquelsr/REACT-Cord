import { Cache } from '../../cache';
import { device } from '../../css/constants/sizes';
import { Fetcher } from '../../fetcher';
import MovieList from '../../components/movielist';
import React from 'react';
import SearchFilters from '../../components/searchfilter';
import styled from 'styled-components';

export default class Discover extends React.Component {
  cache = Cache.getInstance();

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

  searchPopularMovies() {
    if (this.cache.totalPopularMovies === 0) {
      Promise.all([Fetcher.getAllPopularMovies(), Fetcher.getAllGenres()])
        .then((results) => {
          const movies = results[0].data;
          const genreOptions = results[1]?.data.genres;
          this.cache.popularMovies = movies.results;
          this.cache.totalPopularMovies = movies.total_results;
          this.cache.genreOptions = genreOptions;
          this.updateStateWithCache();
        })
        .catch((e) => {
          console.error(e);
        });
    } else {
      this.updateStateWithCache();
    }
  }

  updateStateWithCache() {
    this.setState({
      results: this.cache.popularMovies,
      totalCount: this.cache.totalPopularMovies,
      genreOptions: this.cache.genreOptions,
    });
  }

  searchMovies(keyword, year) {
    if (keyword === '' && (year === '' || year === 0)) {
      this.searchPopularMovies();
    } else if (keyword !== this.state.keyword || year !== this.state.year) {
      this.setState({
        keyword,
        year,
      });
      Fetcher.searchMovies(keyword, year)
        .then((res) => {
          this.setState({
            results: res.data.results,
            totalCount: res.data.total_results,
          });
        })
        .catch((e) => console.error(e));
    }
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
            onSearch={(keyword, year) => this.searchMovies(keyword, year)}
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
  float: right;

  @media ${device.laptop} {
    width: 280px;
    margin-top: 36px;
  }
`;

const MobilePageTitle = styled.h1`
  margin: 0 0 24px 60px;
  font-weight: 500;

  @media ${device.laptop} {
    display: none;
  }
`;

const TotalCount = styled.span`
  display: block;
  font-weight: lighter;
`;
