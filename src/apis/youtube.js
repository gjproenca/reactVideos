import axios from 'axios';

const KEY = 'AIzaSyC_v8s2ZuZdVMFYU0vgm820KVJ3s0f-Afk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});