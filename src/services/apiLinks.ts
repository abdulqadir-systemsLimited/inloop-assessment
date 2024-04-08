export const API_KEY = 'hKd8RAuyG9yTm72kRFWoMZ7TrD4smRQk';
export const BASE_URL = `https://api.giphy.com/v1/gifs/`;
export const GIFS_PER_PAGE = 15;
export const TRENDING_API_URL = `trending?api_key=${API_KEY}&limit=${GIFS_PER_PAGE}`;
export const SEARCH_API_URL = (searchGif: string, offset: number) =>
  `${BASE_URL}search?api_key=${API_KEY}&q=${searchGif}&limit=${GIFS_PER_PAGE}&offset=${offset}`;

