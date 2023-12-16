import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:9003' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('patient')) {
        req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem('patient')).token
        }`;
    }
    return req;
});

//Auth specific
export const logIn = (formData) =>
    API.post('/api/v1/auth/authenticate', formData);

export const signUp = (formData) => API.post('/api/v1/auth/register', formData);

//Consent specific
export const getAllConsents = (id) =>
    API.get(`/api/v1/patient/all-consents?patient_id=${id}`);

export const updateConsent = (id, updatedConsent) =>
    API.put(`/api/v1/patient/update-consent?consent_id=${id}`, updatedConsent);

//Health record specific
export const getAllRecords = (patient_id, hospital_id) =>
    API.get(
        `/api/v1/patient/get-records?patient_id=${patient_id}&hospital_id=${hospital_id}`
    );
