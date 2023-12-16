import {
    START_LOADING,
    END_LOADING,
    GET_ALL_CONSENTS,
    UPDATE_CONSENT,
    SET_UPDATE_CONSENT,
} from '../constants/actionTypes';

const reducer = (
    state = { isLoading: true, consents: [], consentToUpdate: null },
    action
) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case GET_ALL_CONSENTS:
            return { ...state, consents: action.payload };
        case SET_UPDATE_CONSENT:
            return { ...state, consentToUpdate: action.payload };
        case UPDATE_CONSENT:
            return {
                ...state,
                consents: state.consents.map((consent) =>
                    consent.requestId === action.payload.requestId
                        ? action.payload
                        : consent
                ),
            };
        default:
            return state;
    }
};

export default reducer;
