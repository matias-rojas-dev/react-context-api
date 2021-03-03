// api constants
const BASE_URL = 'https://kitsu.io/api/edge';

const PAGINATION_GET = '/anime?page[limit]=15';

const FILTER_ANIME = '/anime?filter[text]=';


// get the first 15 anime
export const principalsAnimes = () => `${BASE_URL}${PAGINATION_GET}`;

// get an anime with your name
export const searchAnime = query => `${BASE_URL}${FILTER_ANIME}${query}`;


// utils 
export const notFoundGif = 'https://i.pinimg.com/originals/d9/2a/1c/d92a1cf8aef657f514349872e882dae6.gif';