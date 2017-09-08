/* eslint-disable */
import React, { PropTypes } from 'react';
import { Grid } from 'react-redux-grid';

import Pager from './Pager';
import Api from './Api';

import {
    data,
    columns,
    pageSize,
    events,
} from './demodata';

export const CustomPager = ({ store }) => {


    const customFooter = {
        columns,
        dataSource: Api,
        // data,
        plugins: {
            PAGER: {
                enabled: true,
                pagingType: 'remote',
                pagerComponent: (
                    <Pager
                        api={Api}
                        store={store}
                        pageSize="5"
                    />
                )
            }
        },
        events,
        store,
        stateKey: 'custom-pager'
    };



    return <Grid { ...customFooter } />;
};

const { object } = PropTypes;

CustomPager.propTypes = {
    store: object.isRequired
};

CustomPager.defaultProps = {};

export default CustomPager;