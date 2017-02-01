const React = require('react');

const Clock = require('Clock');
const Controls = require('Controls');
const TimerForm = require('TimerForm');

const Timer = React.createClass({ 
    getInitialState: function() {
        return {
            count: 0,
            countupStatus: 'stopped'
        }
    },
    componentDidUpdate: function(prevProps, prevState) {
        if (this.state.countupStatus !== prevState.countupStatus) {
            switch (this.state.countupStatus) {
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
                count: ++this.state.count
            });            
        }, 1000);
    },
    handleStatusChange: function(newStatus) {
        this.setState({
            countupStatus: newStatus    
        });
    },
    handleSetTimer: function(seconds) {
        this.setState({
            countupStatus: 'started',
            count: seconds
        });
    },
    render: function() {
        let {count, countupStatus} = this.state;

        const renderControlArea = () => {
            if (countupStatus !== 'stopped') {
                return <Controls countdownStatus={countupStatus} onStatusChange={this.handleStatusChange}/>
            } else {
                return <TimerForm onSetCountup={this.handleSetTimer}/>
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

module.exports = Timer;