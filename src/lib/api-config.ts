// API configuration for different environments
const getApiUrl = () => {
  // Use relative path - Vite proxy handles dev, production uses same domain
  return "/api";
};

export const API_URL = getApiUrl();

