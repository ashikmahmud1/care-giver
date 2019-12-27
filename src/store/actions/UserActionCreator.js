import * as actionTypes from './ActionTypes';
import axios from 'axios';
import { BASE_URL } from '../../config';

//************ Synchronous action creators ************
const loginSuccess = (payload) => {
    return { type: actionTypes.LOGIN_SUCCESS, payload: payload }
};

const loginFailed = (payload) => {
    return { type: actionTypes.LOGIN_FAILED, payload: payload }
}

export const logout = () => {
    return { type: actionTypes.LOGOUT }
}


//********* Async action creators **********

// Register will dispatch to synchronous action register success or register failed
export const register = ({ form }) => {
    // extract the data from the payload
    console.log(form);
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
    };
    return (dispatch, getState) => {
        const state = getState();
        // const {AccountName, current_uploads} = state.UploadReducer;
        axios.post(`${BASE_URL}/api/v1/users/register`, form, axiosConfig)
            .then(res => {
                const response_data = res.data;
                const payload = {};
                payload.user = response_data.data.user; // user object
                payload.token = response_data.token; // string
                dispatch(loginSuccess(payload))
            }).catch(err => { dispatch(loginFailed({ err })) })
    };
};

// Login will dispatch to synchronous action login success or login failed

export const login = ({ form }) => {
    // extract the data from the payload
    console.log(form);
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
    };
    return (dispatch, getState) => {
        const state = getState();
        // const {AccountName, current_uploads} = state.UploadReducer;
        axios.post(`${BASE_URL}/api/v1/users/login`, form, axiosConfig)
            .then(res => {
                const response_data = res.data;
                const payload = {};
                payload.user = response_data.data.user; // user object
                payload.token = response_data.token; // string
                dispatch(loginSuccess(payload))
            }).catch(err => { dispatch(loginFailed({ err })) })
    };
};