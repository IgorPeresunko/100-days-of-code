const React = require('react');

const Controls = React.createClass({
    propTypes: {
        countdownState: React.PropTypes.string,
        onStatusChange: React.PropTypes.func
    },
    onStatusChange: function(newStatus) {
        return () => {
            this.props.onStatusChange(newStatus);
        }
    },
    render: function() {
        let {countdownStatus} = this.props;
        let renderStartStopButton = () => {
            if (countdownStatus === 'started') {
                return <button className="pause-button" onClick={this.onStatusChange('paused')}>Pause</button>
            } else if (countdownStatus === 'paused') {
                return <button className="start-button" onClick={this.onStatusChange('started')}>Start</button>
            }
        }
        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="clear-button" onClick={this.onStatusChange('stopped')}>Clear</button>
            </div>
        );
    }
});

module.exports = Controls;