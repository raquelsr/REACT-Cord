import React, { useEffect, useState, useCallback } from 'react';
import styled, { css } from 'styled-components';

import * as colors from '../../css/constants/colors';
import ExpandableFilter from '../accordionfilter';
import SearchBar from '../../components/searchbar';

import SearchIcon from '../../images/search-icon-yellow.png';
import YearIcon from '../../images/year-icon.png';

export default function SearchFilters({
  genres,
  ratings,
  languages,
  onSearch,
}) {
  const [keyword, setKeyword] = useState('');
  const [year, setYear] = useState(0);

  const debounce = (callback, wait = 1500) => {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        callback(...args);
      }, wait);
    };
  };

  const searchMovies = useCallback(
    debounce((keyword, year) => {
      onSearch(keyword, year);
    }),
    []
  );

  useEffect(() => {
    searchMovies(keyword, year);
  }, [keyword, year]);

  return (
    <FiltersWrapper>
      <SearchFiltersCont className="search_inputs_cont" marginBottom>
        <SearchBar
          id="keyword_search_input"
          type="text"
          icon={{ src: SearchIcon, alt: 'Magnifying glass' }}
          placeholder="Search for movies"
          onChange={(e) => setKeyword(e)}
        />
        <SearchBar
          id="year_search_input"
          type="number"
          icon={{ src: YearIcon, alt: 'Calendar icon' }}
          placeholder="Year of release"
          onChange={(e) => setYear(e)}
        />
      </SearchFiltersCont>
      <SearchFiltersCont>
        <CategoryTitle>Movies</CategoryTitle>
        {/* TODO: Complete the "AccordionFilter" component and re-use it for all filter categories */}
      </SearchFiltersCont>
    </FiltersWrapper>
  );
}

const FiltersWrapper = styled.div`
  position: relative;
`;

const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  .search_bar_wrapper:first-child {
    margin-bottom: 15px;
  }

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 15px;
    `}
`;

const CategoryTitle = styled.h3`
  margin: 0 0 15px 0;
`;
