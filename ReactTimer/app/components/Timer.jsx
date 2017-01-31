const React = require('react');

const Clock = require('Clock');

const Timer = React.createClass({ 
    getInitialState: function() {
        return {
            count: 0
        }
    },
    render: function() {
        return (    
            <div className="timer-page">
                Timer
                <Clock totalSeconds={this.state.count}/>
            </div>
        );
    }
}); 

module.exports = Timer;