import React from 'react';
import uuid from 'node-uuid';

const Like = require('react-icons/lib/fa/hand-spock-o');

class Note extends React.Component {
    constructor(props) {
        super(props);
        this.handleLikeClick = this.handleLikeClick.bind(this);
    }
    handleLikeClick() {
        
    }

    render() {
        const { teacher, id, day, time, why, likes } = this.props.note;
        return (
            <div className="teacher-news">
                <div className="info">
                    <span className="name">{teacher}</span>                    
                    <span className="why">{why}</span>
                    <span className='time'>{time}</span>
                    <span className='time'>{day}</span>
                </div>
                <div className="likes">
                    <span className="like" onClick={this.handleLikeClick}><Like/> </span> <span> {parseInt(likes)}</span>
                </div>
            </div>
        );
    }
}

export default Note;