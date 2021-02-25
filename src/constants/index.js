// api constants

const BASE_URL = 'https://kitsu.io/api/edge';

const PAGINATION_GET = '/anime?page[limit]=15';

// get the first 15 anime
export const principalsAnimes = () => `${BASE_URL}${PAGINATION_GET}`;