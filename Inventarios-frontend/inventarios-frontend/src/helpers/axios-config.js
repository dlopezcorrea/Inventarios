import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://inventarios-iud-diegolopez.herokuapp.com/api/',
});

