export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "http://localhost:3000";
export const tmdbAPI = {
  getAPI: (type) => `${apiKey}/${type}`,
};
