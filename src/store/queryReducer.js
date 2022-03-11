const SET_QUERY = 'SET_QUERY';

export const setQuery = (payload) => ({ type: SET_QUERY, payload });

export default function queryReducer(state = "", action) {
    switch (action.type) {
        case SET_QUERY:
            return action.payload;
        default:
            return state;
    }
}