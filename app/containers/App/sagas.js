import { take, call, put, select, cancel, takeLatest, takeEvery } from 'redux-saga/effects';
import { LOAD_AUTHORS_SUCCESS  } from 'containers/App/constants';
import { repoLoadingError } from '../../containers/App/actions';
import authorApi from '../../api/mockAuthorApi';

export function* getAuthors() {
    try {
        const authors = yield call(authorApi.getAllAuthors);
        // Instructing middleware to dispatch corresponding action.
        yield put({
            type: LOAD_AUTHORS_SUCCESS,
            authors
        })
    } catch (err) {
        yield put(repoLoadingError(err));
    }
}

