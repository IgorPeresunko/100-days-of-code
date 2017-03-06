import uuid from 'node-uuid';

const note = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            console.log('reducer', action.payload);
            return [
                    ...state,
                    action.payload
                ];
        case 'ADD_NOTES':
            return [
                ...state,
                ...action.payload
            ]           
        default: 
            return state;
    }
}

export default note;