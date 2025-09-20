import { api, authConfig } from '../api/axios';
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
): Promise<Movie[]> {
  const config = authConfig();
  config.params = { query, page };

  const response = await api.get<FetchMoviesResponse>(
    '/search/movie',
    config
  );

  return response.data.results;
}
