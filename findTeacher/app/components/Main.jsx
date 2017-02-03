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
            isAdding: true,
            teachers: [
                {
                    id: uuid(),
                    name: 'Nezdoliy',
                    news: [
                        { 
                            id: uuid(),
                            where: '2-407',
                            day: '21.10.2017',
                            time: '12:00',
                            why: 'I will be doing nothing'
                        },
                        { 
                            id: uuid(),
                            where: '2-407',
                            day: '21.10.2017',
                            time: '12:00',
                            why: 'I will be doing nothing'
                        }
                    ]
                },
                {
                    id: uuid(),
                    name: 'Borovleva',
                    news: [
                        { 
                            id: uuid(),
                            where: '2-407',
                            day: '21.10.2017',
                            time: '12:00',
                            why: 'I will be doing nothing'
                        },
                        { 
                            id: uuid(),
                            where: '2-407',
                            day: '21.10.2017',
                            time: '12:00',
                            why: 'I will be doing nothing'
                        }
                    ]
                },
                {
                    id: uuid(),
                    name: 'Borovleva',
                    news: [
                        { 
                            id: uuid(),
                            where: '2-407',
                            day: '21.10.2017',
                            time: '12:00',
                            why: 'I will be doing nothing'
                        },
                        { 
                            id: uuid(),
                            where: '2-407',
                            day: '21.10.2017',
                            time: '12:00',
                            why: 'I will be doing nothing'
                        }
                    ]
                },
                {
                    id: uuid(),
                    name: 'Borovleva',
                    news: [
                        { 
                            id: uuid(),
                            where: '2-407',
                            day: '21.10.2017',
                            time: '12:00',
                            why: 'I will be doing nothing'
                        },
                        { 
                            id: uuid(),
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
                <SearchLine showAddNote={this.handleAddNote}/>
                <TeacherList teachers={this.state.teachers}/>
            </div>  
        );
    }
});


module.exports = Main;