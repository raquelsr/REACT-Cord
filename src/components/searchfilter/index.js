import { device } from '../../css/constants/sizes';
import AccordionFilter from '../accordionfilter';
import FilterIcon from '../../images/filter-icon.png';
import React, { useEffect, useState, useCallback } from 'react';
import SearchBar from '../../components/searchbar';
import SearchIcon from '../../images/search-icon-yellow.png';
import styled, { css } from 'styled-components';
import YearIcon from '../../images/year-icon.png';

export default function SearchFilters({
  genres,
  ratings,
  languages,
  onSearch,
}) {
  const [keyword, setKeyword] = useState('');
  const [year, setYear] = useState(0);
  const [isOpenFilters, setIsOpenFilters] = useState(false);

  const debounce = (callback, wait = 1000) => {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        callback(...args);
      }, wait);
    };
  };

  // it is solved if we use useMemo but I prefer useCallback
  // eslint-disable-next-line
  const searchMovies = useCallback(
    debounce((keyword, year) => {
      onSearch(keyword, year);
    }),
    []
  );

  useEffect(() => {
    searchMovies(keyword, year);
  }, [searchMovies, keyword, year]);

  return (
    <FiltersWrapper>
      <SearchFiltersCont
        className="search_inputs_cont"
        marginBottom
        isOpen={isOpenFilters}
      >
        <SearchFiltersInline>
          <SearchBar
            id="keyword_search_input"
            type="text"
            icon={{ src: SearchIcon, alt: 'Magnifying glass' }}
            placeholder="Search for movies"
            onChange={(e) => setKeyword(e)}
          />
          <SearchBar
            id="filters_input"
            type="button"
            icon={{ src: FilterIcon, alt: 'Filter icon' }}
            onClick={(e) => setIsOpenFilters(!isOpenFilters)}
          />
        </SearchFiltersInline>
        <SearchBar
          id="year_search_input"
          type="number"
          icon={{ src: YearIcon, alt: 'Calendar icon' }}
          placeholder="Year of release"
          onChange={(e) => setYear(e)}
        />
      </SearchFiltersCont>
      <SearchFiltersCont
        className="search_categories_cont"
        isOpen={isOpenFilters}
      >
        <CategoryTitle>Movies</CategoryTitle>
        {/* TODO: Complete the "AccordionFilter" component and re-use it for all filter categories */}
        <AccordionFilter
          title="Select genre(s) "
          values={genres}
          onChange={() => console.warn('Functionality not implemented.')}
        />
        <AccordionFilter
          title="Select min. vote "
          values={ratings}
          onChange={() => console.warn('Functionality not implemented.')}
        />
        <AccordionFilter
          title="Select language "
          values={languages}
          onChange={() => console.warn('Functionality not implemented.')}
        />
      </SearchFiltersCont>
    </FiltersWrapper>
  );
}

const FiltersWrapper = styled.div`
  position: relative;
`;

const SearchFiltersCont = styled.div`
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  .search_bar_wrapper:first-child {
    margin-bottom: 15px;
  }

  &.search_categories_cont {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    margin: 30px 0;
  }

  .search_bar_wrapper:last-child {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 15px;
    `}

  @media ${device.laptop} {
    background-color: white;
    padding: 20px;

    &.search_categories_cont {
      display: block;
    }

    & .search_bar_wrapper:last-child {
      display: flex;
    }
  }
`;

const SearchFiltersInline = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;

  .search_bar_wrapper:first-child {
    width: 100%;
  }

  .search_bar_wrapper:last-child {
    display: block;
    width: 26px;
    height: 26px;
  }

  @media ${device.laptop} {
    .search_bar_wrapper:last-child {
      display: none;
    }
  }
`;

const CategoryTitle = styled.h3`
  margin: 0 0 15px 0;
`;
