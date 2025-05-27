// Use environment variable or fallback to localhost for development
export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "https://no-code-jhij.onrender.com";

export const API_URL = import.meta.env.VITE_BACKEND_URL || 'https://no-code-jhij.onrender.com';

export const IS_PRODUCTION = import.meta.env.PROD; 