const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_ONE_FROM_CART = 'REMOVE_ONE_FROM_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';

export const addToCart = (payload) => ({ type: ADD_TO_CART, payload });
export const removeOneFromCart = (payload) => ({ type: REMOVE_ONE_FROM_CART, payload });
export const removeFromCart = (payload) => ({ type: REMOVE_FROM_CART, payload });
export const clearCart = () => ({ type: CLEAR_CART });

export default function cartReducer(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload];

        case REMOVE_ONE_FROM_CART:
            const id = state.findIndex((item) => item.id === action.product.id);
            return [...state.slice(0, id), ...state.slice(id + 1)];

        case REMOVE_FROM_CART:
            return state.filter((item) => item.id !== action.payload.id);

        case CLEAR_CART:
            return [];

        default:
            return state;
    }
}
