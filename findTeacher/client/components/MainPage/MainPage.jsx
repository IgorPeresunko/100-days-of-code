import React from 'react';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import uuid from 'node-uuid';

import * as noteAction from '../../actions/noteAction';

//components
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Notes from '../Notes/Notes';
import AddNote from '../AddNote/AddNote';
import Shadow from '../Shadow/Shadow';


class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdding: false,
            searchText: ''
        }
        this.handleAddNote = this.handleAddNote.bind(this);
        this.handleAddNewData = this.handleAddNewData.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }
    handleAddNote() {
        this.setState({
            isAdding: !this.state.isAdding
        });
    }
    handleAddNewData(why, time, day) {
        this.props.startAddNote({
            teacher:"Нездолій Ю.О.",
            id: uuid(), 
            day,
            time,
            why,
            likes: 0
        }); 
        this.handleAddNote();
    }
    handleFilter(text) {
        this.setState({
            searchText: text
        });
    }
    render() {
        const renderAddNote = () => {
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
                {renderAddNote()}
                <Header/>               
                <Menu handleAddNote={this.handleAddNote} handleFilter={this.handleFilter}/>  
                <Notes notes={this.props.notes} searchText={this.state.searchText}/> 
            </div>
        );
    }
};

const mapStateToProps = state => ({    
    notes: state.notes
})

const mapDispatchToProps = dispatch => 
    bindActionCreators(noteAction, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

//export default MainPage;//connect(mapStateToProps, mapDispatchToProps)(MainPage);