let React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');

let Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        }
    },
    handleSearch: function(location) {
        this.setState({
           location: location,
           temp: 100,
           isLoading: true
        });
    },
    render: function() {
        let {location, temp, isLoading} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <WeatherMessage temp={temp} location={location}/>;
            }
        }
        return (
            <div>
                <h1>Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;