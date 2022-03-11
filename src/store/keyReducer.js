const SET_KEY = 'SET_KEY';

export const setKey = (payload) => ({ type: SET_KEY, payload });

export default function keyReducer(state = "", action) {
    switch (action.type) {
        case SET_KEY:
            return action.payload;
        default:
            return state;
    }
}