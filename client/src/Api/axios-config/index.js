import axios from 'axios';

const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: true
})

export default service;