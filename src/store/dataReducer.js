const DOWNLOAD_DATA = 'DOWNLOAD_DATA';

export const downloadData = (payload) => ({ type: DOWNLOAD_DATA, payload });

export default function dataReducer(state = [], action) {
    switch (action.type) {
        case DOWNLOAD_DATA:
            return [...action.payload];
        default:
            return state;
    }
}