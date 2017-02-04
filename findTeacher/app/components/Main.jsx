let React = require('react');

//components
const SearchLine = require('SearchLine');
const TeacherList = require('TeacherList');
const AddNote = require('AddNote');
const Shadow = require('Shadow');
const uuid = require('node-uuid');

let Main = React.createClass({
    getInitialState: function() {
        return {
            isAdding: false,
            teachers: [
                {
                    id: uuid(),
                    name: 'Нездолій Юрій Олексійович',
                    news: [
                        { 
                            id: uuid(),
                            where: '2-407',
                            day: '21.10.2017',
                            time: '12:00',
                            why: 'Приймаю курсові'
                        },
                        { 
                            id: uuid(),
                            where: '2-407',
                            day: '21.10.2017',
                            time: '12:00',
                            why: 'Консультація'
                        }
                    ]
                },
                {
                    id: uuid(),
                    name: 'Боровльова Світлана Юрівна',
                    news: [
                        { 
                            id: uuid(),
                            where: '2-407',
                            day: '21.10.2017',
                            time: '12:00',
                            why: 'Приймаю курсові'
                        },
                        { 
                            id: uuid(),
                            where: '2-407',
                            day: '21.10.2017',
                            time: '12:00',
                            why: 'Консультація'
                        }
                    ]
                },
                {
                    id: uuid(),
                    name: 'Боровльова Світлана Юрівна',
                    news: [
                        { 
                            id: uuid(),
                            where: '2-407',
                            day: '21.10.2017',
                            time: '12:00',
                            why: 'Приймаю курсові'
                        },
                        { 
                            id: uuid(),
                            where: '2-407',
                            day: '21.10.2017',
                            time: '12:00',
                            why: 'Консультація'
                        }
                    ]
                },
                {
                    id: uuid(),
                    name: 'Боровльова Світлана Юрівна',
                    news: [
                        { 
                            id: uuid(),
                            where: '2-407',
                            day: '21.10.2017',
                            time: '12:00',
                            why: 'Приймаю курсові'
                        },
                        { 
                            id: uuid(),
                            where: '2-407',
                            day: '21.10.2017',
                            time: '12:00',
                            why: 'Консультація'
                        }
                    ]
                }
            ],
            newTeachers: [
                {
                    id: uuid(),
                    name: 'Нездолій Юрій Олексійович',
                    news: [
                        { 
                            id: uuid(),
                            where: '2-407',
                            day: '21.10.2017',
                            time: '12:00',
                            why: 'Приймаю курсові'
                        },
                        { 
                            id: uuid(),
                            where: '2-407',
                            day: '21.10.2017',
                            time: '12:00',
                            why: 'Консультація'
                        }
                    ]
                },
                {
                    id: uuid(),
                    name: 'Боровльова Світлана Юрівна',
                    news: [
                        { 
                            id: uuid(),
                            where: '2-407',
                            day: '21.10.2017',
                            time: '12:00',
                            why: 'Приймаю курсові'
                        },
                        { 
                            id: uuid(),
                            where: '2-407',
                            day: '21.10.2017',
                            time: '12:00',
                            why: 'Консультація'
                        }
                    ]
                },
                {
                    id: uuid(),
                    name: 'Боровльова Світлана Юрівна',
                    news: [
                        { 
                            id: uuid(),
                            where: '2-407',
                            day: '21.10.2017',
                            time: '12:00',
                            why: 'Приймаю курсові'
                        },
                        { 
                            id: uuid(),
                            where: '2-407',
                            day: '21.10.2017',
                            time: '12:00',
                            why: 'Консультація'
                        }
                    ]
                },
                {
                    id: uuid(),
                    name: 'Боровльова Світлана Юрівна',
                    news: [
                        { 
                            id: uuid(),
                            where: '2-407',
                            day: '21.10.2017',
                            time: '12:00',
                            why: 'Приймаю курсові'
                        },
                        { 
                            id: uuid(),
                            where: '2-407',
                            day: '21.10.2017',
                            time: '12:00',
                            why: 'Консультація'
                        }
                    ]
                }
            ]
        }
    },
    handleAddNote: function() {
        this.setState({
            isAdding: !this.state.isAdding
        });
    },   
    handleAddNewData: function(where, time, date, why) {
        /*this.setState({
            teachers: [
                ...this.state.teachers,
                {
                    id: uuid(),
                    name: 'currentUser',
                    news: [
                        ...this.state.teachers
                    ]
                }
            ]
        });*/
    },
    handleSearch: function(teacher) {
        this.filterTeachers(this.state.teachers, teacher);
    },
    filterTeachers: function(teachers, searchTeacher) {
        let newTeachers = teachers;

        newTeachers = newTeachers.filter((teacher) => {
            let name = teacher.name.toLowerCase();
            console.log(name, searchTeacher);
            return searchTeacher.length === 0 || name.indexOf(searchTeacher) > -1;
        });
        this.setState({
            newTeachers: newTeachers
        });
    },
    render: function() {

        let showAddNote = () => {
            if (this.state.isAdding) {
                return (
                    <div> 
                        <AddNote addNewData={this.handleAddNewData}/>
                        <Shadow hideShadow={this.handleAddNote}/>                   
                    </div>                    
                );
            }
        }
        return ( 
            <div className="wrapper">
                {showAddNote()}
                <SearchLine showAddNote={this.handleAddNote} onSearch={this.handleSearch}/>
                <TeacherList teachers={this.state.newTeachers}/>
            </div>  
        );
    }
});


module.exports = Main;