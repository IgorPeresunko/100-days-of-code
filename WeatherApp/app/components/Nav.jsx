let React = require('react');
let {Link, IndexLink} = require('react-router');

let Nav = React.createClass({
    render: function() {
        return (
            <div>
                <h2>Nav component</h2>
                <IndexLink to="/">Get Weather</IndexLink>
                <Link to="/about">About</Link>
                <Link to="/examples">Examples</Link>
            </div>
        );
    }
});

module.exports = Nav;