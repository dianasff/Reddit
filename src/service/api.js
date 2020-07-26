import axios from 'axios';

const api = axios.create ({
    baseURL: 'https://www.reddit.com/r/reactjs.json'
})

export default api;