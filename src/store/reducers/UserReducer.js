import * as actionTypes from '../actions/ActionTypes';
const initialState = {
    isLoggedIn: false,
    loading: false,
    user: {},
    token: null
};
// passing the parameter initial state and an action
export default function CountReducer(state = initialState, action) {

    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            console.log(action.payload)
            const {user, token} = action.payload;
            // save the user and token in the localStorage
            localStorage.setItem('user', user);
            localStorage.setItem('token', token);
            return {...state, isLoggedIn: true, loading: false, user, token};
        default:
            return state;
    }
}
