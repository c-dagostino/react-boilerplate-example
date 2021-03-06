/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';
export const DEFAULT_LOCALE = 'en';

export const LOAD_COURSES = 'LOAD_COURSES';
export const LOAD_COURSES_SUCCESS = 'LOAD_COURSES_SUCCESS';
export const LOAD_AUTHORS = 'LOAD_AUTHORS';
export const LOAD_AUTHORS_SUCCESS = 'LOAD_AUTHORS_SUCCESS';
export const SAVE_COURSE = 'SAVE_COURSE';

export const DELETE_COURSE = 'DELETE_COURSE';

export const BEGIN_AJAX_CALL = 'BEGIN_AJAX_CALL';
export const AJAX_CALL_ERROR = 'AJAX_CALL_ERROR';

export const UPSERT_COURSE_SUCCESS = 'UPSERT_COURSE_SUCCESS';


export const USER_EXPIRED = 'redux-oidc/USER_EXPIRED';
export const REDIRECT_SUCCESS = 'redux-oidc/REDIRECT_SUCCESS';
export const USER_FOUND = 'redux-oidc/USER_FOUND';
export const USER_NOT_FOUND = 'redux-oidc/USER_NOT_FOUND';
export const SILENT_RENEW_ERROR = 'redux-oidc/SILENT_RENEW_ERROR';
export const SESSION_TERMINATED = 'redux-oidc/SESSION_TERMINATED';
export const LOADING_USER = 'redux-oidc/LOADING_USER';
export const USER_SIGNED_OUT = 'redux-oidc/USER_SIGNED_OUT';


