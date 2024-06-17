import axios from 'axios';


const instamce = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

instamce.interceptors.request.use((config)=>{
    config.headers.Authorization = window.localStorage.getItem('token');

    return config;
});

export default instamce;