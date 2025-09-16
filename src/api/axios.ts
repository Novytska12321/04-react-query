import axios, { type AxiosRequestConfig } from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
const API_TOKEN = import.meta.env.VITE_TMDB_TOKEN

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
  
});

export const authConfig = (token?: string): AxiosRequestConfig => ({
  headers: {
    Authorization: token ? `Bearer ${token}` : `Bearer ${API_TOKEN}`,
  },
});

export const setAuthToken = (token?: string) => {
  if (token) api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  else api.defaults.headers.common['Authorization'] = `Bearer ${API_TOKEN}`;
};
console.log('API_BASE_URL:', API_BASE_URL);
console.log('API_TOKEN exists:', !!API_TOKEN);


export default api;

