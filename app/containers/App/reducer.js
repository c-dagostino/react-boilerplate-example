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
    LOAD_REPOS_SUCCESS,
    LOAD_REPOS,
    LOAD_REPOS_ERROR,
    LOAD_COURSES,
    LOAD_COURSES_SUCCESS,
    LOAD_AUTHORS,
    LOAD_AUTHORS_SUCCESS,
    SAVE_COURSE,
} from './constants';

// The initial state of the App
const initialState = fromJS({
    loading: false,
    error: false,
    currentUser: false,
    userData: {
        repositories: false,
    },

});

function appReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_COURSE:
            return state
                .set('loading', true)
                .set('error', false)
        case LOAD_AUTHORS:
            return state
                .set('loading', true)
                .set('error', false);
        case LOAD_AUTHORS_SUCCESS:
            return state
                .set('loading', false)
                .set('authors', action.authors);
        case LOAD_COURSES:
            return state
                .set('loading', true)
                .set('error', false);
        case LOAD_COURSES_SUCCESS:
            console.log("COURSES " + action.courses);
            return state
                .set('loading', false)
                .set('courses', action.courses);
        case LOAD_REPOS:
            return state
                .set('loading', true)
                .set('error', false)
                .setIn(['userData', 'repositories'], false);
        case LOAD_REPOS_SUCCESS:
            return state
                .setIn(['userData', 'repositories'], action.repos)
                .set('loading', false)
                .set('currentUser', action.username);
        case LOAD_REPOS_ERROR:
            return state
                .set('error', action.error)
                .set('loading', false);
        default:
            return state;
    }
}

export default appReducer;
