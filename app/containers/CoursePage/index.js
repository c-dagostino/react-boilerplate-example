/**
 * Created by ChrisDAgostino on 7/21/17.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';
import {makeSelectCourses, makeSelectLoading, makeSelectAuthors} from 'containers/App/selectors';
import LoadingIndicator from '../../components/LoadingIndicator/index';
import * as courseActions from '../App/actions';

//The five major items of a Container component
//1. Constructor - initialize state and call bind functions
//2. Child functions that are called by Render
//3. Render functon - Normall just calling child components
//4. Proptypes - for proptype validation
//5. Redux Connect and related functions


class CoursesPage extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
    }

    componentDidMount()
    {
        this.props.actions.loadCourses();
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    redirectToAddCoursePage() {
        browserHistory.push('/manageCourse');
    }

    deleteCourse(event) {
        // event.preventDefault();
        if (confirm("Delete this Course?"))
        {
            let courseId = event.target.name;
            this.props.actions.deleteCourse(courseId);
        }

    }

    render() {
        //destructure to limit the use of this.props


        const {courses, loading} = this.props;

        if (loading) {
            return (<div><h1>Courses</h1>
                <div><LoadingIndicator/></div>
            </div>);
        }

        let courseList = null;
        if (courses) {
            courseList = <CourseList courses={courses} onDelete={this.deleteCourse}/>
        }
        return (
            <div>
                <h1>Courses</h1>
                <input type="submit"
                       value="Add Course"
                       className="btn btn-primary"
                       onClick={this.redirectToAddCoursePage}
                />

                {courseList}


            </div>
        );

    }
}

CoursesPage.propTypes = {

    courses: React.PropTypes.oneOfType([
        React.PropTypes.array,
        React.PropTypes.bool,
    ]),
    actions: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
};



function mergeAuthorNameIntoCourses(courses, authors) {

    return courses.map(course => {
        const author = authors.filter(author => author.id == course.authorId)[0];
        return {
            id: course.id,
            watchHref: course.watchHref,
            title: course.title,
            authorId: course.authorId,
            authorName: author.firstName + ' ' + author.lastName,
            length: course.length,
            category: course.category
    };
    });


}

function mapStateToProps(state, ownProps) {

    const selectAuthors = makeSelectAuthors();
    const selectCourses = makeSelectCourses();
    const selectLoading = makeSelectLoading();

    let updatedCourses = mergeAuthorNameIntoCourses(selectCourses(state, ownProps), selectAuthors(state, ownProps));

    return {
        courses: updatedCourses,
        loading: selectLoading(state, ownProps),

    }

};

//what actions are available in our component
//define createCourse that takes course
// function mapDispatchToProps(dispatch){
//     return {
//         createCourse: course => dispatch(courseActions.createCourse(course))
//     };
// }

//bindActionCreators will bind all actions defined in courseActions
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}


//connect component to redux, connect returns a function that takes CoursesPage as a parameter
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);