import React from 'react';

class Shadow extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.hideShadow();
    }
    render() {
        return (
            <div className="shadow" onClick={this.handleClick}></div>  
        );
    }
}

export default Shadow;