import firebase, { firebaseRef } from '../firebase/index.js';

export const addNote = note => {
    return {
        type: "ADD_NOTE",
        payload: note
    }    
}

export const addNotes = notes => {
    return {
        type: "ADD_NOTES",
        payload: notes
    }
}

export const startAddNote = newNote => {
    return (dispatch, getState) => {
        const note = {
            teacher: newNote.teacher,
            id: newNote.id, 
            day: newNote.day,
            time: newNote.time,
            why: newNote.why,
            likes: newNote.likes
        }
        const noteRef = firebaseRef.child('notes').push(note);

        noteRef.then(() => {
            dispatch(addNote({
                ...note,
                id: noteRef.key
            }));
        });
    }
}

export const startAddNotes = () => {
    return (dispatch, getState) => {
        const notesRef = firebaseRef.child('notes');

        return notesRef.once('value').then(snap => {
            const notes = snap.val() || {};
            let parsedNotes = [];

            Object.keys(notes).forEach((noteId) => {
                parsedNotes.push({
                    id: noteId,
                    ...notes[noteId]
                });
            });

            dispatch(addNotes(parsedNotes));
        });
    }
}