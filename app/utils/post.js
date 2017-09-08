import 'whatwg-fetch';

export default function post(url, data) {
    return fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
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
