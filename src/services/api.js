import axios from 'axios';

const TOKEN_STORAGE_KEY = 'token';

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    'http://localhost:8080/api',
});

const getStoredToken = () => {
  return (
    localStorage.getItem(TOKEN_STORAGE_KEY) ||
    sessionStorage.getItem(TOKEN_STORAGE_KEY)
  );
};

const isPublicEndpoint = (url = '') => {
  const publicEndpoints = [
    '/health',
    '/roles',
    '/categories',
    '/products',
    '/signup',
    '/login',
  ];

  return publicEndpoints.some(
    (endpoint) =>
      url === endpoint ||
      url.startsWith(`${endpoint}?`)
  );
};


api.interceptors.request.use(
  (config) => {
    config.headers = config.headers || {};

    if (isPublicEndpoint(config.url)) {
      delete config.headers.Authorization;
      return config;
    }

    const token = getStoredToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete config.headers.Authorization;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export const setApiToken = (token) => {
  if (token) {
    api.defaults.headers.common.Authorization =
      `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common.Authorization;
  }
};

export default api;