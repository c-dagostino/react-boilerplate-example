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

export const BEGIN_AJAX_CALL = 'BEGIN_AJAX_CALL';
export const AJAX_CALL_ERROR = 'AJAX_CALL_ERROR';
