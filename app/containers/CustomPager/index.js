import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import CustomPager from './CustomPager';
import Simple from './Simple';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import store from '../../app'


class ExampleGridContainer extends React.PureComponent {
    constructor(props, context) {
        super(props, context);


    }


    componentDidMount() {

    }



    render() {


        return (
            <div className="simpleContainer">
                <h2 className="gridH2">Courses</h2>
                
                <CustomPager { ...{ store } } />

            </div>
        );

    }
}


const mapStateToProps = (state) => ({
    store: state
});

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
};


//connect component to redux, connect returns a function that takes CoursesPage as a parameter
export default connect(mapStateToProps, mapDispatchToProps)(ExampleGridContainer);