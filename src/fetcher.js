import axios from 'axios';

// TODO: All of your API requests should be in this file
// See the README file for more information about the APIs you would need to use

const API_KEY = process.env.REACT_APP_API_KEY_TMDB;

export class Fetcher {
  static URL = 'https://api.themoviedb.org/3';

  static getAllMovies() {
    return axios.get(
      `${Fetcher.URL}/movie/popular?api_key=${API_KEY}&language=en-US`
    );
  }

  static getAllGenres() {
    return axios.get(
      `${Fetcher.URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
  }
}
