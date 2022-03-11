const FILTER_STATE = 'FILTER_STATE';

export const setFilterState = (payload) => ({ type: FILTER_STATE, payload });

export default function filterReducer(state = false, action) {
    switch (action.type) {
        case FILTER_STATE:
            return action.payload;
        default:
            return state;
    }
}