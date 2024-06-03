import axios from 'axios';


const instamce = axios.create({
    baseURL: 'http://localhost:4444'
});

instamce.interceptors.request.use((config)=>{
    config.headers.Authorization = window.localStorage.getItem('token');

    return config;
});

export default instamce;