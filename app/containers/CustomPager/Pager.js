/* eslint-disable */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-redux-grid';


export const Pager = ({ api, gridData, current, store  }) => {

    // const state = {...store};
    // const test = state.getState();
    // let gridData = test.get('dataSource').get('custom-pager');
    //
    // let current = test.get('pager').get('custom-pager')


    const total = gridData ?
        gridData.total
        : 0;

    const currIndex = current
    && current.get !== undefined
        ? current.get('pageIndex')
        : 0;


    const buttons = [];

    const onClick = (e) => {
        const index = e.target.innerHTML
        store.dispatch(
            Actions.PagerActions
                .setPageIndexAsync({
                    pageIndex: parseInt(index) - 1,
                    pageSize: 5,
                    dataSource: api,
                    stateKey: 'custom-pager'
                })
        );
    };

    for (let i = 0; i < total; i++) {
        buttons.push(
            <button
                children={i+1}
                onClick={onClick}
                key={"custom-pager"+i}
                className={
                    i === currIndex
                        ? 'react-redux-grid-active'
                        : 'react-redux-grid-inactive'
                }
            />
        );
    }

    return (
        <div style={{textAlign: 'right'}}>
            { buttons }
        </div>
    );
};

const { string, object } = PropTypes;

Pager.propTypes = {
    pagingDataSource: string,
    store: object.isRequired
};

Pager.defaultProps = {};

export default connect((state, props) => ({

    gridData: state.get('dataSource').get('custom-pager'),
    current: state.get('pager').get('custom-pager'),
}))(Pager);