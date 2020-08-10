import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "5cef9d776768b9b6cc625230d88030bb",
    language: "en-US",
  },
});
export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  topRated: () => api.get("movie/top_rated"),
  upcoming: () => api.get("movie/upcoming"),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (input) =>
    api.get(`search/movie`, {
      params: {
        query: encodeURIComponent(input),
      },
    }),
};

export const tvApi = {
  onTheAir: () => api.get("tv/on_the_air"),
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  tvDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (input) =>
    api.get(`search/tv`, {
      params: {
        query: encodeURIComponent(input),
      },
    }),
};

export const trendingApi = {
  trendingAll: () => api.get("trending/all/week"),
};

export default api;
