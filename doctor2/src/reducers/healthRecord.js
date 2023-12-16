import {
    START_LOADING,
    END_LOADING,
    GET_PATIENT_RECORD,
} from '../constants/actionTypes';

const reducer = (state = { isLoading: false, record: null }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case GET_PATIENT_RECORD:
            return { ...state, record: action.payload };
        default:
            return state;
    }
};

export default reducer;
