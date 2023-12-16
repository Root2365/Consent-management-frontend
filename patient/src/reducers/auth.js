import {
    AUTH,
    LOGOUT,
    START_LOADING,
    END_LOADING,
} from '../constants/actionTypes';

const authReducer = (state = { authData: null, isLoading: false }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case AUTH:
            localStorage.setItem(
                'patient',
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
