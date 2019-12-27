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
            const { user, token } = action.payload;
            // save the user and token in the localStorage
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);
            return { ...state, isLoggedIn: true, loading: false, user, token };
        case actionTypes.LOGOUT:
            // remove the user and token from the localStorage
            if (localStorage.getItem('user')) {
                localStorage.removeItem('user');
            }
            if(localStorage.getItem('token')){
                localStorage.removeItem('token');
            }
            return { ...state, isLoggedIn: false, loading: false, user: {}, token: '' }
        default:
            return state;
    }
}
