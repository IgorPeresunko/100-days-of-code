const React = require('react');

const CountdownForm = React.createClass({
    onSubmit: function(e) {
        e.preventDefault();
        let strSeconds = this.refs.seconds.value;

        if (strSeconds.match(/^[0-9]*$/) && strSeconds.length > 0) {
            this.refs.seconds.value = '';
            this.props.onSetCountdown(parseInt(strSeconds, 10));
        }
    },
    render: function() {
        return (
            <form className="countdown-form" onSubmit={this.onSubmit}>
                <input className="countdown-input" type="text" ref="seconds" placeholder="Enter time in seconds"/>
                <button>Start</button>
            </form>
        );
    }
});

module.exports = CountdownForm;