import * as actionTypes from '../actions/ActionTypes';
const initialState = {
    logged_in: false,
    loading: false,
    user: {}
};
// passing the parameter initial state and an action
export default function CountReducer(state = initialState, action) {

    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            console.log(action.payload)
            return {state};
        default:
            return state;
    }
}
