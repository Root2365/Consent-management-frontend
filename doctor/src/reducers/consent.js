import {
    START_LOADING,
    END_LOADING,
    GET_ALL_CONSENTS,
    CREATE_CONSENT,
} from '../constants/actionTypes';

const reducer = (
    state = { isLoading: true, consents: [], consent: null },
    action
) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case GET_ALL_CONSENTS:
            return { ...state, consents: action.payload };
        case CREATE_CONSENT:
            return { ...state, consents: [...state.consents, action.payload] };
        default:
            return state;
    }
};

export default reducer;
