const React = require('react');


const Navigation = require('Navigation');

const Main = (props) => {    
    return (
        <div className="wrapper">                
            <Navigation/>
            {props.children}
        </div>
    );    
}


module.exports = Main;