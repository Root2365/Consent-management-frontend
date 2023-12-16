import * as api from '../api';
import { AUTH, START_LOADING, END_LOADING } from '../constants/actionTypes';

export const login = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.logIn(formData);
        console.log(formData);
        dispatch({ type: START_LOADING });
        dispatch({ type: AUTH, data });
        dispatch({ type: END_LOADING });
        // navigate('/patient');
    } catch (error) {
        console.log(error);
    }
};

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        dispatch({ type: START_LOADING });
        dispatch({ type: AUTH, data });
        dispatch({ type: END_LOADING });
        // navigate('/patient');
    } catch (error) {
        console.log(error);
    }
};
