/**
 * Created by ChrisDAgostino on 7/23/17.
 */
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CourseListRow = ({course, onDelete}) => {
    return (
        <tr>
            <td><a href={course.watchHref} target="_blank">Watch</a></td>
            <td><Link to={'/manageCourse/' + course.id}>{course.title}</Link></td>
            <td>{course.authorName}</td>
            <td>{course.category}</td>
            <td>{course.length}</td>
            <td><input type="button"
                       value="Delete"
                       className="btn btn-primary"
                       name = {course.id}
                       onClick={onDelete}
            /></td>
        </tr>
    );
};

CourseListRow.propTypes = {
    course: PropTypes.object.isRequired
};

export default CourseListRow;
