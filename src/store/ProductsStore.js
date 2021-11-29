const DOWNLOAD_LIST = "DOWNLOAD_LIST";
const GET_PRODUCTS = "GET_PRODUCTS";

const defaultState = {
  products: [],
};

export const downloadProducts = (products) => ({
  type: DOWNLOAD_LIST,
  products,
});

export const getProducts = () => ({
  type: GET_PRODUCTS,
});

const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case DOWNLOAD_LIST:
      return { products: action.products };

    case GET_PRODUCTS:
      return { ...state };

    default:
      return [];
  }
};

export default productsReducer;
