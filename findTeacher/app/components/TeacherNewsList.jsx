const React = require('react');

const TeacherNews = require('TeacherNews');

const TeacherNewsList = React.createClass({
    render: function() {
        let {news} = this.props;
        let renderTeacherNews = () => {
            return news.map((info) => {
                return (
                    <TeacherNews key={info.id} where={info.where} day={info.day} time={info.time} why={info.why}/>
                );
            });
        }

        return (
            <div className="teacher-news-list">
                <div className="describe">
                    <span>where</span>
                    <span>time</span>
                    <span>day</span>
                </div>
                
                {renderTeacherNews()}                
            </div>
        );
    }
});

module.exports = TeacherNewsList;