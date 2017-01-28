let React = require('react');
let Nav = require('Nav');

let Main = React.createClass({
    render: function() {
        return (
            <div>                
                <Nav/>
                Main
                {this.props.children}
            </div>
        );
    }
});


module.exports = Main;