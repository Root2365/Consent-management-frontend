import * as api from '../api';
import {
    START_LOADING,
    END_LOADING,
    GET_HEALTH_RECORDS,
} from '../constants/actionTypes';

//fetch all health records
export const getAllRecords = (patient_id, hospital_id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.getAllRecords(patient_id, hospital_id);
        dispatch({ type: GET_HEALTH_RECORDS, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error.message);
    }
};
