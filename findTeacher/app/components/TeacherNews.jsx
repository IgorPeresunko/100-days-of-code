const React = require('react');

const TeacherNews = React.createClass({
    render: function() {
        let {where, day, time, why} = this.props;

        return (
            <div className="teacher-news">
                <span>{where}</span>
                <span>{time}</span>
                <span>{day}</span>
                <div className="why">{why}</div>

            </div>
        );
    }
});

module.exports = TeacherNews;