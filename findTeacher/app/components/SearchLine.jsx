const React = require('react');

//components
const SearchField = require('SearchField');

const SearchLine = React.createClass({
    getInitialState: function() {
        return {
            searchTeacher: ''
        }
    },
    handleSearch: function(searchTeacher) {
        this.props.onSearch(searchTeacher);
    },
    handleAddNote: function() {
        this.props.showAddNote();
    },
    render: function() {
        return (
            <div className="search-line-block">
                <SearchField onSearch={this.handleSearch}/>
                <button className="add-news" onClick={this.handleAddNote}>Додати запис</button>
                <div className="clear"></div>
                
            </div>
        );
    }
});

module.exports = SearchLine;