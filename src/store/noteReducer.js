const DOWNLOAD_NOTE = 'DOWNLOAD_NOTE';

export const downloadNote = (payload) => ({ type: DOWNLOAD_NOTE, payload });

export default function noteReducer(state = {}, action) {
    switch (action.type) {
        case DOWNLOAD_NOTE:
            return action.payload;
        default:
            return state;
    }
}