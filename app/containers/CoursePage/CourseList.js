/**
 * Created by ChrisDAgostino on 7/23/17.
 */
import React from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses, onDelete}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>&nbsp;</th>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Length</th>
                <th>&nbsp;</th>
            </tr>
            </thead>
            <tbody>
            {courses.map(course =>
                <CourseListRow key={course.id} course={course} onDelete={onDelete}/>
            )}
            </tbody>
        </table>
    );
};

CourseList.propTypes = {
    courses: React.PropTypes.array.isRequired
};

export default CourseList;