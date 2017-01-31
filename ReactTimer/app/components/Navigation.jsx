const React = require('react');
const {Link, IndexLink} = require('react-router');

const Navigation = () => {    
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">React timer App</li>
                    <li className="menu-text">
                        <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
                    </li>
                    <li className="menu-text">
                        <Link to="/countdown" activeClassName="active-link">Countdown</Link>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        Created by <a href="http://www.igorperesunko.com/" target="_blank"> Igor Peresunko</a>
                    </li>
                </ul>
            </div>
            <div className="clear"></div>
        </div>
    );    
}
    
module.exports = Navigation;