import React from 'react';
import TextInput from '../../components/TextInput/TextInput';
import SelectInput from '../../components/SelectInput/SelectInput';

const CourseForm =({course, allAuthors, onSave, onChange, saving, errors}) => {
    return (
        <form>
            <h1>Manage Course</h1>
            <TextInput
                name="title"
                label="Title"
                value={course.title}
                onChange={onChange}
                error={errors.title}/>
            <SelectInput
                name="authorId"
                label="Author"
                value={course.authorId}
                defaultOption="Select Author"
                options={allAuthors}
                onChange={onChange}
                error={errors.authorId}/>
            <TextInput
                name="category"
                label="Category"
                value={course.category}
                onChange={onChange}
                error={errors.categor}/>
            <TextInput
                name="length"
                label="Length"
                value={course.length}
                onChange={onChange}
                error={errors.length}/>
            <TextInput
                name="watchHref"
                label="Watch Href"
                value={course.watchHref}
                onChange={onChange}
                error={errors.length}/>
            <input
                type="submit"
                disabled={saving}
                value={saving ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave}/>
        </form>
    );
};

CourseForm.propTypes = {
    course: React.PropTypes.object.isRequired,
    allAuthors: React.PropTypes.array,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    saving: React.PropTypes.bool,
    errors: React.PropTypes.object,
    savedCourse: React.PropTypes.bool
};

export default CourseForm;
