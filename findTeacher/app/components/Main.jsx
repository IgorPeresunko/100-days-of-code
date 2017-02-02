let React = require('react');

//components
const SearchLine = require('SearchLine');
const TeacherList = require('TeacherList');

let Main = React.createClass({
    getInitialState: function() {
        return {
            teachers: [
                {
                    id: 1,
                    name: 'Nezdoliy',
                    news: [
                        { 
                            id: 1,
                            where: '2-407',
                            day: '21.10.2017',
                            time: '12:00',
                            why: 'I will be doing nothing'
                        },
                        { 
                            id: 2,
                            where: '2-407',
                            day: '21.10.2017',
                            time: '12:00',
                            why: 'I will be doing nothing'
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'Borovleva',
                    news: [
                        { 
                            id: 3,
                            where: '2-407',
                            day: '21.10.2017',
                            time: '12:00',
                            why: 'I will be doing nothing'
                        },
                        { 
                            id: 4,
                            where: '2-407',
                            day: '21.10.2017',
                            time: '12:00',
                            why: 'I will be doing nothing'
                        }
                    ]
                },
                {
                    id: 3,
                    name: 'Borovleva',
                    news: [
                        { 
                            id: 4,
                            where: '2-407',
                            day: '21.10.2017',
                            time: '12:00',
                            why: 'I will be doing nothing'
                        },
                        { 
                            id: 5,
                            where: '2-407',
                            day: '21.10.2017',
                            time: '12:00',
                            why: 'I will be doing nothing'
                        }
                    ]
                },
                {
                    id: 4,
                    name: 'Borovleva',
                    news: [
                        { 
                            id: 6,
                            where: '2-407',
                            day: '21.10.2017',
                            time: '12:00',
                            why: 'I will be doing nothing'
                        },
                        { 
                            id: 7,
                            where: '2-407',
                            day: '21.10.2017',
                            time: '12:00',
                            why: 'I will be doing nothing'
                        }
                    ]
                }
            ]
        }
    },
    render: function() {
        return ( 
            <div className="wrapper">
                <SearchLine/>
                <TeacherList teachers={this.state.teachers}/>
            </div>  
        );
    }
});


module.exports = Main;