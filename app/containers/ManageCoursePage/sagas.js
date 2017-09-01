import { take, call, put, cancel, takeLatest, takeEvery, fork } from 'redux-saga/effects';
import { SAVE_COURSE} from '../App/constants';
import { repoLoadingError } from '../App/actions';
import { LOCATION_CHANGE } from 'react-router-redux';
import {browserHistory} from 'react-router';
import post from '../../utils/post';
import {fromJS} from 'immutable';

export function* upsertCourse(action) {
    try {
        const course = action.course;
        const postURL = 'http://localhost:8080/course';
        yield call(post, postURL, course);
        //yield put(loadCourses());
        browserHistory.push('/courses')
    } catch (err) {
        yield put(repoLoadingError(err));
    }
}


function* saveCourse(action) {
    const watcher = yield takeLatest(SAVE_COURSE, upsertCourse);
    // yield take(LOCATION_CHANGE);
    // yield cancel(watcher);
}


// Bootstrap sagas
export default [
    saveCourse
];
