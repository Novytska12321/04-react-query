import type { Movie } from './movieKUYGT';

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
