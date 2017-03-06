import React from 'react';
import { Link } from 'react-router';

class StartPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="start-page">
                <div className="logo">FindTeacher</div>
                <form>
                    <input type="text" placeholder="Login"/><br/>
                    <input type="password" placeholder="Password"/><br/>
                    <Link to="/main">login</Link>
                </form>
            </div>
        );
    }
}

export default StartPage;