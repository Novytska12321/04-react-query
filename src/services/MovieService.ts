import { api, authConfig } from '../api/axios';
import type {AxiosResponse } from 'axios';
import type { Movie } from '../types/Movie';

export interface FetchMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export async function fetchMovies(query: string, page = 1): Promise<Movie[]> {
  const config = authConfig();
  config.params = { query, page };

  const response: AxiosResponse<FetchMoviesResponse> = await api.get(
    '/search/movie',
    config
  );

  return response.data.results;
}

