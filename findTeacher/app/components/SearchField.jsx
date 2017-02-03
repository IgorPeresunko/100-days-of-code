const React = require('react');

const SearchField = React.createClass({
    handleSearch: function() {
        let searchTeacher = this.refs.searchTeacher.value;

        this.props.onSearch(searchTeacher);
    },
    render: function() {
        return (
            <input className="search-field" ref="searchTeacher" placeholder="FindTeacher" onChange={this.handleSearch}/>
        );
    }
});

module.exports = SearchField;