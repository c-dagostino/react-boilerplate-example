/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
    LOAD_REPOS,
    LOAD_REPOS_SUCCESS,
    LOAD_REPOS_ERROR,
    LOAD_COURSES,
    LOAD_COURSES_SUCCESS,
    SAVE_COURSE,
    LOAD_AUTHORS,
    DELETE_COURSE
} from './constants';

export function deleteCourse(courseId) {
    return {type: DELETE_COURSE, courseId};
}

export function loadCourses() {
    return {type: LOAD_COURSES};
}

export function loadCoursesSuccess(courses) {
    return {type: LOAD_COURSES_SUCCESS, courses};}


export function loadRepos() {
        return {
            type: LOAD_REPOS,
        };
    }


export function reposLoaded(repos, username) {
        return {
            type: LOAD_REPOS_SUCCESS,
            repos,
            username,
        };
    }

export function loadAuthors() {
    return {
        type: LOAD_AUTHORS,
    };
}

export function repoLoadingError(error) {
        return {
            type: LOAD_REPOS_ERROR,
            error,
        };
    }

export function saveCourse(course) {

    return {
        type: SAVE_COURSE,
        course,
    };
}
