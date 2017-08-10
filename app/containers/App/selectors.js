/**
 * The global state selectors
 */

import {createSelector} from 'reselect';

const selectGlobal = (state) => state.get('global');

const makeSelectCourses = () => createSelector(
    selectGlobal,
    (globalState) => globalState.get('courses')
);

const makeSelectAuthors = () => createSelector(
    selectGlobal,
    (globalState) => globalState.get('authors')
);

const makeSelectCurrentUser = () => createSelector(
    selectGlobal,
    (globalState) => globalState.get('currentUser')
);

const makeSelectLoading = () => createSelector(
    selectGlobal,
    (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
    selectGlobal,
    (globalState) => globalState.get('error')
);

const makeSelectSavedCourse = () => createSelector(
    selectGlobal,
    (globalState) => globalState.get('savedCourse')
);

const makeSelectRepos = () => createSelector(
    selectGlobal,
    (globalState) => globalState.getIn(['userData', 'repositories'])
);

const makeSelectLocationState = () => {
    let prevRoutingState;
    let prevRoutingStateJS;

    return (state) => {
        const routingState = state.get('route'); // or state.route

        if (!routingState.equals(prevRoutingState)) {
            prevRoutingState = routingState;
            prevRoutingStateJS = routingState.toJS();
        }

        return prevRoutingStateJS;
    };
};

export {
    selectGlobal,
    makeSelectCurrentUser,
    makeSelectLoading,
    makeSelectError,
    makeSelectRepos,
    makeSelectLocationState,
    makeSelectCourses,
    makeSelectAuthors,
    makeSelectSavedCourse,
};
