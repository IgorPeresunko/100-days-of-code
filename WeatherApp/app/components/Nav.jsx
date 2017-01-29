let React = require('react');
let {Link, IndexLink} = require('react-router');

let Nav = React.createClass({
    render: function() {
        return (
            <div className="header">
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                <Link to="/about" activeStyle={{fontWeight: 'bold'}}>About</Link>
                <Link to="/examples" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </div>
        );
    }
});

module.exports = Nav;