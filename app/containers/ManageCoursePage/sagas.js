import { take, call, put, select, cancel, takeLatest, takeEvery } from 'redux-saga/effects';
import { SAVE_COURSE, LOAD_COURSES, LOAD_COURSES_SUCCESS  } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from '../../containers/App/actions';
import courseApi from '../../api/mockCourseApi';
import {browserHistory} from 'react-router';
import {loadCourses} from '../App/actions';
import request from '../../utils/request';
import {fromJS} from 'immutable';
import post from '../../utils/post';




function CreateGuid() {
    function _p8(s) {
        var p = (Math.random().toString(16)+"000000000").substr(2,8);
        return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;
    }
    return _p8() + _p8(true) + _p8(true) + _p8();
}

export function* upsertCourse(action) {
    try {
        const course = action.course;
        course.id = CreateGuid();
        const postURL = 'http://localhost:8080/course';
        const savedCourse = yield call(post, postURL, course);
        yield put(loadCourses());
        browserHistory.push('/courses')
    } catch (err) {
        yield put(repoLoadingError(err));
    }
}


function* saveCourse(action) {
    // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
    // By using `takeLatest` only the result of the latest API call is applied.
    // It returns task descriptor (just like fork) so we can continue execution

    yield takeEvery(SAVE_COURSE, upsertCourse);
    //yield cancel(watcher);
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
    // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
    // By using `takeLatest` only the result of the latest API call is applied.
    // It returns task descriptor (just like fork) so we can continue execution
    yield takeLatest(LOAD_COURSES, getCourses);
    //yield cancel(watcher);
}


// Bootstrap sagas
export default [
    saveCourse,
    fetchCourses
];
