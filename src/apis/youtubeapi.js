import axios from 'axios';

const KEY = 'AIzaSyD0OheKdfCpBEC6ZjE9R5yBaQFYB37vLYw';

const youtubeAPI = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 6,
    key: KEY,
  },
});

export default youtubeAPI;
