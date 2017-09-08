import 'whatwg-fetch';

export default function deleteRequest(url) {
    return fetch(url, {
        method: "DELETE",
        credentials: "same-origin"
    }).then(function (response) {
        response.status     //=> number 100–599
        response.statusText //=> String
        response.headers    //=> Headers
        response.url        //=> String

        return response.text()
    }, function (error) {
        error.message //=> String
    });
}