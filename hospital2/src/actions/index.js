import * as api from '../api';
import {
    DOCTOR_REGISTER,
    LOGIN,
    START_LOADING,
    END_LOADING,
} from '../constants/actionTypes';

import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// toast.configure();

export const doctorRegister = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.doctorRegister(formData);
        // toast('Doctor Registered Successfully!');
        dispatch({ type: DOCTOR_REGISTER, data });
        navigate('/login');
    } catch (error) {
        toast(
            'There was an error in registering the doctor. Please try again.'
        );
        console.log(error);
    }
};

export const login = (formData) => async (dispatch) => {
    try {
        const { data } = await api.logIn(formData);
        dispatch({ type: START_LOADING });
        dispatch({ type: LOGIN, data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};
