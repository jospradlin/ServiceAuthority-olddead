import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://service-depot.firebaseio.com/'
});

export default instance;