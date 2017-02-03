const React = require('react');

const AddNote = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();

        let where = this.refs.where.value;        
        let time = this.refs.time.value;
        let date = this.refs.date.value;
        let why = this.refs.why.value;

        if (where.length > 0 && time.length > 0 && date.length > 0) {
            this.refs.where.value ='';        
            this.refs.time.value ='';
            this.refs.date.value ='';
            this.refs.why.value ='';
            this.props.addNewData(where, time, date, why);
        }
    },
    render: function() {
        return (
            <div className="add-note">
                <h2>Додайте новий запис на вашу сторінку!</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="number" placeholder="2-407" ref="where"/>
                    <input type="time" placeholder="12:00" ref="time"/>
                    <input type="date" placeholder="12.04.19" ref="date"/>
                    <textarea type="text" placeholder="Коротко опишіть, чим ви будете займатися. (поле не обовязкове)" ref="why"/>
                    <button>Додати</button>
                </form>
            </div>
        );
    }
});

module.exports = AddNote;