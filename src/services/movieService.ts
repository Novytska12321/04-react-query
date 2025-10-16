import { api } from '../api/axios';
import type { Movie } from '../types/movie';

export interface FetchMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export async function fetchMovies(
  query: string,
  page = 1
): Promise<FetchMoviesResponse> {
  const API_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

  if (!API_TOKEN) {
    throw new Error('TMDB token is missing in environment variables');
  }

  const config = {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      accept: 'application/json',
    },
    params: {
      query,
      page,
      include_adult: false,
      language: 'en-US',
    },
  };

  const response = await api.get<FetchMoviesResponse>('/search/movie', config);
  return response.data;
}
