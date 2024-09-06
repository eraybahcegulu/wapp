import axios from 'axios';
import toast from 'react-hot-toast';
import { API_URL } from '../config';

const axiosInstance = axios.create({
    baseURL: API_URL,
});

axiosInstance.interceptors.response.use(
    (response) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(response);
            }, 2000);
        });
    },
    (error) => {
        const message = error.response?.data?.message || error.message;
        return toast.error(message);
    }
);

export default axiosInstance;
