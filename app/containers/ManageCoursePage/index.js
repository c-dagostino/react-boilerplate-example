import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { makeSelectAuthors, makeSelectCourses, makeSelectSavedCourse } from 'containers/App/selectors';
import CourseForm from './CourseForm';
import toastr from 'toastr';
import * as actionCreators from '../App/actions';


//add export so we can import it for testing
export class ManageCoursePage extends React.PureComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {},
            saving: false,
            savedCourse: false
        };

        //bind updateCourseState to the components this
        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
        this.redirect = this.redirect.bind(this);
    }


    //called anytime props have changed or react thinks props have changed
    componentWillReceiveProps(nextProps) {



        if (this.props.course.id != nextProps.course.id)
        {
            //Neccessary to populate form when existing course is loaded directly (page refresh)
            this.setState({course: Object.assign({}, nextProps.course)});
        }
    }



    updateCourseState(event) {
        const field = event.target.name;
        let course = Object.assign({}, this.state.course);
        course[field] = event.target.value;
        return this.setState({course: course});
    }

    redirect() {

        this.setState({saving: false});
        toastr.success('Course Saved!');
        this.context.router.push('/courses');
    }

    courseFormIsValid() {
        let formIsValid = true;
        let errors = {};

        if (this.state.course.title.length < 5) {
            errors.title = 'Title must be at least 5 characters.';
            formIsValid = false;
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    saveCourse(event) {
        event.preventDefault();
        if (!this.courseFormIsValid()) {
            return;
        }

        this.setState({saving: true});
        //use .then to wait until action is complete before redirecting

        // this.props.actions.saveCourse(this.state.course)
        //     .then(() => this.redirect())
        //     .catch(error => {
        //         toastr.error(error);
        //     });
        this.props.actions.saveCourse(this.state.course);
    }

    render() {


        return (
            <CourseForm
                allAuthors={this.props.authors}
                onChange={this.updateCourseState}
                onSave={this.saveCourse}
                course={this.state.course}
                errors={this.state.errors}
                saving={this.state.saving}
                savedCourse={this.state.savedCourse}
            />
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: React.PropTypes.oneOfType([
        React.PropTypes.array,
        React.PropTypes.bool,
    ]),
    loadAuthors: React.PropTypes.func
};

//Pull in the React Router context so router is available on this.context.router
ManageCoursePage.contextTypes = {
    router: PropTypes.object
};

function getCourseById(courses, id) {

    console.log("COURSES " + courses);
    const course = courses.filter(course => course.id == id);

    if (course.length > 0) return course[0];
    return null;
}

function authorsFormattedForDropdown(authors) {
    return authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });
}

function mapStateToProps(state, ownProps) {
    const courseId = ownProps.params.id; //from the path defined in routes '/course/:id'
    const selectAuthors = makeSelectAuthors();
    const courseSaved = makeSelectSavedCourse();
    let course = {id: "0", watchHref: '', title: '', authorId: '', length: '', category: ''};

    let courses = makeSelectCourses();
    if (courseId && courses.length > 0) {
        course = getCourseById(courses(state, ownProps), courseId);
    }


    return {
        course: course,
        savedCourse: courseSaved(state, ownProps),
        authors: authorsFormattedForDropdown(selectAuthors(state, ownProps))
    };
}


function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
