const React = require('react');

//components
const TeacherBlock = require('TeacherBlock');

const TeacherList = React.createClass({
    render: function() {

        let {teachers} = this.props;
        let renderTeachers = () => {
            return teachers.map((teacher) => {
                return (
                    <TeacherBlock key={teacher.id} {...teacher}/>
                );
            });
        }
        return (
            <div className="teacher-list">
                {renderTeachers()}
            </div>
        );
    }
});


module.exports = TeacherList;