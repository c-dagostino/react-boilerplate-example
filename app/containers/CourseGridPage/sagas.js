import { take, call, put, select, cancel, takeLatest, takeEvery } from 'redux-saga/effects';
import { SAVE_COURSE, LOAD_COURSES, LOAD_COURSES_SUCCESS, LOAD_AUTHORS, LOAD_AUTHORS_SUCCESS, DELETE_COURSE} from '../App/constants';
import { repoLoadingError, loadCourses } from '../App/actions';
import { LOCATION_CHANGE } from 'react-router-redux';
import {browserHistory} from 'react-router';
import request from '../../utils/request';
import post from '../../utils/post';
import deleteRequest from '../../utils/delete';
import {fromJS} from 'immutable';



export function* deleteCourseRequest(action) {
    try {
        const courseId = action.courseId;
        const postURL = 'http://localhost:8080/course/' + courseId;

        yield call(deleteRequest, postURL);
        yield put(loadCourses());
        //browserHistory.push('/courses')
    } catch (err) {
        yield put(repoLoadingError(err));
    }
}



export function* getAuthors() {
    const requestURL = 'http://localhost:8080/authors';

    try {
        const authors = yield call(request, requestURL);
        // Instructing middleware to dispatch corresponding action.
        yield put({
            type: LOAD_AUTHORS_SUCCESS,
            authors
        })
    } catch (err) {
        yield put(repoLoadingError(err));
    }
}

export function* getCourses() {
    const requestURL = 'http://localhost:8080/courses';

    try {

        const courses = yield call(request, requestURL);

        // Instructing middleware to dispatch corresponding action.

        yield put({
            type: LOAD_COURSES_SUCCESS,
            courses
        })
    } catch (err) {
        yield put(repoLoadingError(err));
    }
}


function* fetchCourses(action) {
    const watcher = yield takeEvery(LOAD_COURSES, getCourses);
    yield take(LOCATION_CHANGE);
    yield cancel(watcher);
}

function* fetchAuthors(action) {
    const watcher = yield takeEvery(LOAD_AUTHORS, getAuthors);
    yield take(LOCATION_CHANGE);
    yield cancel(watcher);
}


function* deleteCourse(action) {
    const watcher = yield takeEvery(DELETE_COURSE, deleteCourseRequest);
    yield take(LOCATION_CHANGE);
    yield cancel(watcher);
}

// Bootstrap sagas
export default [
    fetchCourses,
    fetchAuthors,
    deleteCourse,
];
