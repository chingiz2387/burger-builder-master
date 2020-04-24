import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://anpilogov-example-ffd54.firebaseio.com/'
});

export default instance;
