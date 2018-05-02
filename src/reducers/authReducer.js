import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR
} from '../actions/authenticationTypes';

export default function(state = {}, action) {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, authenticated: true, error: '', loading: false };
        case UNAUTH_USER:
            return { ...state, authenticated: false, loading: false };
        case AUTH_ERROR:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
}
