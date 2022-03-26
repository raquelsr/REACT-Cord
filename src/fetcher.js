import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY_TMDB;
const LANGUAGE = process.env.REACT_APP_LANGUAGE;

export class Fetcher {
  static URL = 'https://api.themoviedb.org/3';
  static IMAGE_URL = 'https://image.tmdb.org/t/p/w154';

  _language = 'en-US';
  static API_KEY_PARAM = `api_key=${API_KEY}`;
  static LANGUAGE_PARAM = `&language=${LANGUAGE}`;

  static getAllPopularMovies() {
    return axios.get(
      `${Fetcher.URL}/movie/popular?${Fetcher.API_KEY_PARAM}&${Fetcher.LANGUAGE_PARAM}`
    );
  }

  static getAllGenres() {
    return axios.get(
      `${Fetcher.URL}/genre/movie/list?${Fetcher.API_KEY_PARAM}&${Fetcher.LANGUAGE_PARAM}`
    );
  }

  static searchMovies(keyword, year) {
    let url = `${Fetcher.URL}/search/movie/?${Fetcher.API_KEY_PARAM}&${Fetcher.LANGUAGE_PARAM}`;
    if (keyword) url += `&query=${keyword}`;
    if (year) url += `&year=${year}`;
    return axios.get(url);
  }
}
