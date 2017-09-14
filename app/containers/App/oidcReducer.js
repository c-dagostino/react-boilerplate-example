/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {fromJS} from 'immutable';

import {
    USER_EXPIRED,
    REDIRECT_SUCCESS,
    USER_FOUND, USER_NOT_FOUND,
    SILENT_RENEW_ERROR,
    SESSION_TERMINATED,
    LOADING_USER,
    USER_SIGNED_OUT
} from './constants';

// The initial state of the App
const initialState = fromJS({
    user: null,
    isLoadingUser: false
});

function oidcReducer(state = initialState, action) {
    switch (action.type) {
        case USER_EXPIRED:
            return state
                .set('user', null)
                .set('isLoadingUser', false);
        case SILENT_RENEW_ERROR:
            return state
                .set('user', null)
                .set('isLoadingUser', false);
        case SESSION_TERMINATED:

        case USER_SIGNED_OUT:
            return state
                .set('user', null)
                .set('isLoadingUser', false);
        case REDIRECT_SUCCESS:

        case USER_FOUND:
            return state
                .set('user', action.payload)
                .set('isLoadingUser', false);
        case LOADING_USER:
            return state
                .set('isLoadingUser', true);
        default:
            return state;
    }
}

export default oidcReducer;
