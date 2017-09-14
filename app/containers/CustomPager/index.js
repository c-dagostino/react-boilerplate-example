import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import CustomPager from './CustomPager';
import Simple from './Simple';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import store from '../../app';
import * as courseActions from '../App/actions';

const stompClient = require('../../utils/websocket-listener');

class ExampleGridContainer extends React.PureComponent {
    constructor(props, context) {
        super(props, context);

        this.refreshCourses = this.refreshCourses.bind(this);
    }

    refreshCourses(message) {
        console.log(message)
        this.props.actions.loadCourses();
    }

    componentDidMount() {

        stompClient.register([
            {route: '/topic/newCourse', callback: this.refreshCourses},
            {route: '/topic/updateCourse', callback: this.refreshCourses},
            {route: '/topic/deleteCourse', callback: this.refreshCourses}
        ]);
    }

    render() {


        return (
            <div className="simpleContainer">
                <h2 className="gridH2">Courses</h2>

                <CustomPager { ...{store} } />

            </div>
        );

    }
}


const mapStateToProps = (state) => ({
    store: state
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}


//connect component to redux, connect returns a function that takes CoursesPage as a parameter
export default connect(mapStateToProps, mapDispatchToProps)(ExampleGridContainer);