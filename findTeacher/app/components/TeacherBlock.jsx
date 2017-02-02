const React = require('react');

const TeacherNewsList = require('TeacherNewsList');

const TeacherBlock = React.createClass({
    render: function() {
        let {name, news} = this.props;

        return (
            <div className="teacher-block">
                <h2>I'm {name}</h2>
                <TeacherNewsList news={news}/>
            </div>
        );
    }
});

module.exports = TeacherBlock;