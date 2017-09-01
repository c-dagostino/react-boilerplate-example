import * as _ from 'lodash';

export const dataSource = function getData({
    pageIndex, pageSize
}) {
    return new Promise((resolve) => {
        const request = new XMLHttpRequest();

        const config = {
            method: 'GET',
            route: 'http://localhost:8080/coursesByPage'
        };

        if (pageIndex) {
            config.route = `${config.route}?pageIndex=${pageIndex}&pageSize=${pageSize || 5}`; // eslint-disable-line max-len
        }

        else {
            config.route = `${config.route}?pageSize=${pageSize || 5}` ; // eslint-disable-line max-len
        }

        request.open(config.method, config.route, true);

        request.addEventListener(
            'load', (res) => {
                const response = JSON.parse(res.target.responseText);

                // if you have more data than is being shown
                // ensure you return a total, so the pager knows
                // what paging actions are possible

                // add fake ids if you need them for your example
                _.each(response.data, (obj,index) => { obj._id = index });

                resolve({
                    data: response.courses,
                    total: response.totalPages
                });
            }
        );

        request.send(config.data || null);
    });
};

export default dataSource;