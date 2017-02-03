const React = require('react');

//components
const TeacherBlock = require('TeacherBlock');

const TeacherList = React.createClass({
    handleWheel: function(event) {
        this.element.scrollLeft += event.deltaY;
    },
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
            <div className="teacher-list" ref={e=>this.element=e} onWheel={this.handleWheel}>
                {renderTeachers()}
            </div>
        );
    }
});


module.exports = TeacherList;