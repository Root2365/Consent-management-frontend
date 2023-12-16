import * as api from '../api';

import {
    CREATE_CONSENT,
    GET_ALL_CONSENTS,
    START_LOADING,
    END_LOADING,
} from '../constants/actionTypes';

//Create consent
export const createConsent = (consent, navigate) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.createConsent(consent);
        console.log(data);
        await dispatch({ type: CREATE_CONSENT, payload: data });
        dispatch({ type: END_LOADING });
        navigate(`/doctor/consents`);
    } catch (error) {
        console.log(error);
    }
};

//Get all consents
export const getAllConsents = (doctor_id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.getAllConsents(doctor_id);
        dispatch({ type: GET_ALL_CONSENTS, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error.message);
    }
};
