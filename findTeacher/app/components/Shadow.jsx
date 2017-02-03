const React = require('react');

const Shadow = React.createClass({
    handleClick: function() {
        this.props.hideShadow();
    },
    render: function() {
        return (
            <div className="shadow" onClick={this.handleClick}></div>
        );
    }
});

module.exports = Shadow;