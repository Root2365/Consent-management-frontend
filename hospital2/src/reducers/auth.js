import {
    DOCTOR_REGISTER,
    END_LOADING,
    LOGIN,
    LOGOUT,
    START_LOADING,
} from '../constants/actionTypes';

const authReducer = (
    state = { authData: null, docData: null, isLoading: null },
    action
) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case DOCTOR_REGISTER:
            return { ...state, docData: action?.data };
        case LOGIN:
            localStorage.setItem(
                'hospital',
                JSON.stringify({ ...action?.data })
            );
            return { ...state, authData: action?.data };
        case LOGOUT:
            localStorage.clear();
            return { ...state, authData: null };
        default:
            return state;
    }
};

export default authReducer;
