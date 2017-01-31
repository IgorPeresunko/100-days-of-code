const React = require('react');

const Clock = React.createClass({
    getDefaultProps: function() {
        totalSeconds: 0
    },
    propTypes: function() {
        totalSeconds: React.PropTypes.number
    },
    formatSeconds: function(totalSeconds) {
        let seconds = totalSeconds % 60;
        let minutes = Math.floor(totalSeconds / 60);

        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        return minutes + ':' + seconds;
    },
    render: function() {
        let {totalSeconds} = this.props;
        return (
            <div className="clock">
                <span>
                    {this.formatSeconds(totalSeconds)}
                </span>
            </div>
        );
    }
});

   


module.exports = Clock;