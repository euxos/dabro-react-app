const OPEN_MOBILE_NAV = 'OPEN_MOBILE_NAV';

export const openMobNav = (payload) => ({ type: OPEN_MOBILE_NAV, payload });

export default function mobNavReducer(state = false, action) {
    switch (action.type) {
        case OPEN_MOBILE_NAV:
            return !action.payload;

        default:
            return state;
    }
}