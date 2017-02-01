const React = require('react');

const TimerForm = React.createClass({
    onSubmit: function(e) {
        e.preventDefault();
      
        this.props.onSetCountup(0);
        
    },
    render: function() {
        return (
            <form className="countdown-form" onSubmit={this.onSubmit}>
                <button className="countup-button">Start</button>
            </form>
        );
    }
});

module.exports = TimerForm;