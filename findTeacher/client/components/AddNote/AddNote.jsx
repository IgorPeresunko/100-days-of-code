import React from 'react';

class AddNote extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
      
        let time = this.refs.time.value;
        let date = this.refs.date.value;
        let why = this.refs.why.value;

        if (why.length > 0 && time.length > 0 && date.length > 0) {        
            this.refs.time.value ='';
            this.refs.date.value ='';
            this.refs.why.value ='';
            this.props.addNewData(why, time, date);
        }
    }
    render() {
        return (
            <div className="addNote">
                <h2>Додайте новий запис!</h2>
                <form onSubmit={this.handleSubmit}>
                    <textarea type="text" placeholder="Діяльність та аудиторія" ref="why"/>
                    <input type="time" placeholder="12:00" ref="time"/>
                    <input type="date" placeholder="12.04.19" ref="date"/>                    
                    <button>Додати</button>
                </form>
            </div>
        );
    }
}

export default AddNote;