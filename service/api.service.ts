import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-reservaja.herokuapp.com/',
});

export default api;