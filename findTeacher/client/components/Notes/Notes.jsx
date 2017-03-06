import React from 'react';

//components
import Note from '../Note/Note';

class Notes extends React.Component {
    constructor(props) {
        super(props);
    }
    filterNotes(notes, searchText) {
        return notes.filter(note => {
            let text = note.teacher.toLowerCase();
            return searchText.length === 0 || text.indexOf(searchText) > -1;
        });
    }
    render() {
        const renderNotes = () => {
            return this.filterNotes(this.props.notes, this.props.searchText).map((note) => {
                return (
                    <Note key={note.id} note={note}/>
                );
            });
        }
        return (
            <div className="notes-wrapper">
                <div className="notes">
                    {renderNotes()}
                </div>
            </div>
        );
    }
}

export default Notes;