import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = '?apikey=5e74b140';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axios.get(`${key}&s=${title}`)
    },
    searchFilmsByType: (title: string, type: string) => {
    }
};


export default API;
