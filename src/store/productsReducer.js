const DOWNLOAD_LIST = 'DOWNLOAD_LIST';

export const downloadProducts = (payload) => ({ type: DOWNLOAD_LIST, payload });

export default function productsReducer(state = [], action) {
    switch (action.type) {
        case DOWNLOAD_LIST:
            return [...action.payload]

        default:
            return state;
    }
}
