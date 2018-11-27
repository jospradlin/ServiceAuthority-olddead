import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burgerproject.firebaseio.com/'
});

export default instance;