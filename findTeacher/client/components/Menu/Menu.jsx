import React from 'react';
import {Link} from 'react-router';

import uuid from 'node-uuid';

class SearchLine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTeacher: ''
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleAddNote = this.handleAddNote.bind(this);
    } 
    handleSearch() {
        this.props.handleFilter(this.refs.search.value)
    }
    handleAddNote() {
        this.props.handleAddNote();
    }
    render() {
        return (
            <div className="menu">
                <input type="text" ref="search" placeholder="Пошук" className="search-field" onChange={this.handleSearch}/>               
                <button className="add-note-button" onClick={this.handleAddNote}>add note</button>
                <Link to="/">EXIT</Link>
            </div>
        );
    }
};

export default SearchLine;