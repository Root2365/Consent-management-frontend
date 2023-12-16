import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:9005' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('hospital')) {
        req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem('hospital')).token
        }`;
    }
    return req;
});

export const logIn = (formData) =>
    API.post('/api/v1/auth/authenticate', formData);

export const doctorRegister = (formData) =>
    API.post('/api/v1/hospital-admin/add-doctor', formData);
