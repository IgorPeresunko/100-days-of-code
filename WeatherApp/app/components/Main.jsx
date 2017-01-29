let React = require('react');
let Nav = require('Nav');

let Main = React.createClass({
    render: function() {
        return (
            <div className="wrapper">                
                <Nav/>
                {this.props.children}
            </div>
        );
    }
});


module.exports = Main;