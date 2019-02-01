import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://vault:8200'
});

export default instance;