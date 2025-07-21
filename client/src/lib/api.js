import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: apiUrl,
});

export const apiGet = (url, config) => api.get(url, config);
export const apiPost = (url, data, config) => api.post(url, data, config);
export const apiPut = (url, data, config) => api.put(url, data, config);
export const apiDelete = (url, config) => api.delete(url, config); 