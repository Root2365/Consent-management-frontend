import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:9005' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('doctor')) {
        req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem('doctor')).token
        }`;
    }
    return req;
});

//Auth specific
export const logIn = (formData) =>
    API.post('/api/v1/auth/authenticate', formData);

//Consent Specific
export const getAllConsents = (doctor_id) =>
    API.get(`/api/v1/hospital-doctor/get-consent`);

export const createConsent = (formData) =>
    API.post('/api/v1/hospital-doctor/create-consent', formData);

//Health record Specific
export const getRecordByConsentID = (consent_id) =>
    API.get(
        `/api/v1/hospital-doctor/get-patient-data?consent_id=${consent_id}`
    );

export const createHealthRecord = (formData) =>
    API.post('/api/v1/hospital-records/add', formData);
