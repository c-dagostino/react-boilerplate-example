/**
 * Created by ChrisDAgostino on 9/13/17.
 */
/**
 * The global state selectors
 */

import {createSelector} from 'reselect';

const selectOidc = (state) => state.get('oidc');

const makeSelectUser = () => createSelector(
    selectOidc,
    (oidcState) => oidcState.get('user')
);

const currentUser = (state) => state.getIn(['oidc','user']);

export {
    selectOidc,
    currentUser,
    makeSelectUser
};


