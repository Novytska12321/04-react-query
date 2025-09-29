import axios from 'axios';
import type { Movie } from '../types/movie';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export interface FetchMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export async function fetchMovies(
  query: string,
  page = 1
): Promise<Movie[]> {
  const response = await axios.get<FetchMoviesResponse>(
    `${API_BASE_URL}/search/movie`,
    {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
      params: { query, page },
    }
  );

  return response.data.results;
}