import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-83c98.firebaseio.com'
});

export default instance;