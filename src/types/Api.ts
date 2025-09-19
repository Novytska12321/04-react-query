import type { Movie } from './movie';

export interface FetchMoviesParams {
  query?: string;
  page?: number;
  [key: string]: string | number | undefined;
}

export interface FetchMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
