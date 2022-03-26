export const Cache = (function () {
  let instance;

  function createInstance() {
    return {
      popularMovies: [],
      totalPopularMovies: 0,
      genreOptions: [],
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();
