import axios from 'axios';
import type { Movie } from '../types/movie';


export interface FetchMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_TOKEN = import.meta.env.VITE_TMDB_TOKEN;


export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
    Accept: 'application/json',
  },
});


export const fetchMovies = async (
  query: string,
  page = 1
): Promise<FetchMoviesResponse> => {
  if (!query) {
    return { page: 1, results: [], total_pages: 0, total_results: 0 };
  }

  const response = await api.get<FetchMoviesResponse>('/search/movie', {
    params: { query, page, include_adult: false, language: 'en-US' },
  });

  return response.data;
};


