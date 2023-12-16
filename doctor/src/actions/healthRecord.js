import * as api from '../api';
import {
    START_LOADING,
    END_LOADING,
    GET_PATIENT_RECORD,
    CREATE_HEALTH_RECORD,
} from '../constants/actionTypes';

//fetch all health records of a patient by consent ID
export const getPatientRecordByConsent = (consent_id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.getRecordByConsentID(consent_id);
        // console.log(data);
        dispatch({ type: GET_PATIENT_RECORD, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error.message);
    }
};

//Create Health Record
export const createHealthRecord = (formData, navigate) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        console.log('Form Data', formData);
        const { data } = await api.createHealthRecord(formData);
        console.log('From API', data);
        dispatch({ type: END_LOADING });
        navigate(`/doctor`);
    } catch (error) {
        console.log(error);
    }
};
