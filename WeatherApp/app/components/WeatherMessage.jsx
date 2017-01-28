let React = require('react');

let WeatherMessage = React.createClass({
    render: function() {        
        let {temp, location} = this.props;

        return (
            <h2>
                It's it {temp} in {location}.
            </h2>
        );
    }
});

module.exports = WeatherMessage;