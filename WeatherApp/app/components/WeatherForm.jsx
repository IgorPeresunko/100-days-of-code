let React = require('react');

let WeatherForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        let location = this.refs.location.value;

        if (location.length > 0) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    },
    render: function() {
        return (            
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="location" placeholder="Enter city name"/>
                <button>Get Weather</button>
            </form>                        
        );
    }
});

module.exports = WeatherForm;