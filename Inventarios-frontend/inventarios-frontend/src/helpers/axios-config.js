import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://inventarios-iud-diegolopez.herokuapp.com/',
});

export {axiosInstance}