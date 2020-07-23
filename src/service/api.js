import axios from 'axios';

const api = axios.create ({
    baseURL: 'http://www.reddit.com/r/reactjs/'
})

export default api;