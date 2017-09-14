import 'whatwg-fetch';
import {browserHistory} from 'react-router';
//import configureStore from '../store';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
    return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */

//reads the access_token from the redux state and passes it in its HTTP request
// const store = configureStore(browserHistory)
// const token = store.getState().oidc.user.access_token;
// const headers = new Headers();
// headers.append('Accept', 'application/json');
// headers.append('Authorization', `Bearer ${token}`);
//
// const options = {
//     method,
//     headers
// };

export default function request(url, options) {
    return fetch(url, options)
        .then(checkStatus)
        .then(parseJSON);
}


