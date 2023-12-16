import * as api from '../api';
import {
    START_LOADING,
    END_LOADING,
    GET_ALL_CONSENTS,
    UPDATE_CONSENT,
} from '../constants/actionTypes';

//Get all consents
export const getAllConsents = (patient_id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.getAllConsents(patient_id);
        dispatch({ type: GET_ALL_CONSENTS, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error.message);
    }
};

//update consent
export const updateConsent = (id, updatedConsent) => async (dispatch) => {
    try {
        console.log('To send to API:', id, updatedConsent);
        const { data } = await api.updateConsent(id, updatedConsent);
        dispatch({ type: UPDATE_CONSENT, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};
