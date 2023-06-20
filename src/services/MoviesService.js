import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const trending = '/trending/movie/day';
const search = '/search/movie';
const movieDetails = '/movie/'; // + id
const searchParams = {
  api_key: 'b18a4b193f301c4374762505a1225d9b',
};

class MoviesService {
  static async fetchTrending() {
    return await axios.get(trending, {
      params: {
        ...searchParams,
      },
    });
  }

  static async search(query) {
    return await axios.get(search, {
      params: {
        ...searchParams,
        query,
      },
    });
  }

  static async fetchDetails(movieId) {
    return await axios.get(movieDetails + movieId, {
      params: {
        ...searchParams,
      },
    });
  }

  static async fetchCast(movieId) {
    return await axios.get(`/movie/${movieId}/credits`, {
      params: {
        ...searchParams,
      },
    });
  }

  static async fetchReviews(movieId) {
    return await axios.get(`/movie/${movieId}/reviews`, {
      params: {
        ...searchParams,
      },
    });
  }
}

export default MoviesService;
