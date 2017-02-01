const React = require('react');
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');
const Controls = require('Controls');

const Countdown = React.createClass({
    getInitialState: function() {
        return {
            count: 0,
            countdownStatus: 'stopped'
        }
    },
    componentDidUpdate: function(prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started': 
                    this.startTimer();
                    break;
                case 'stopped': 
                    this.setState({
                        count: 0
                    });
                case 'paused': 
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    startTimer: function() {
        this.timer = setInterval(() => {
            this.setState({
                count: (--this.state.count >= 0 ? this.state.count : 0) 
            });
            if (this.state.count === 0) {
                this.setState({
                   countdownStatus: 'stopped' 
                });
            }
        }, 1000);
    },
    handleSetCountdown: function(seconds) {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    },
    handleStatusChange: function(newStatus) {
        this.setState({
           countdownStatus: newStatus 
        });
    },
    componentWillUnmount: function() {
        console.log('object');
    },
    render: function() {
        let {count, countdownStatus} = this.state;
        let renderControlArea = () => {
            if (countdownStatus !== 'stopped') {
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
            } else {
                return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
            }
        }
        return (
            <div className="timer-page">
                <Clock totalSeconds={count}/>
                {renderControlArea()}
            </div>
        );
    }
}); 

module.exports = Countdown;