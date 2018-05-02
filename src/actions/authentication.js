import axios from 'axios';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './authenticationTypes';
import { ROOT_URL } from '../utils/constants';
import Token from '../utils/token';

export const login = ({ email, password }, history) => async (dispatch) => {
    try {
        const credentials = {
            username: email,
            password
        };
        const res = await axios.post(`${ROOT_URL}/api/login`, credentials);
        Token.setToken(res.data.token);
        history.push('/dashboard');

        dispatch({
            type: AUTH_USER
        });
    } catch (err) {
        dispatch(authError('Bad Login Info'));
    }
};

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}

export function logout(history) {
    Token.removeToken();
    history.push('/');
    return { type: UNAUTH_USER };
}
