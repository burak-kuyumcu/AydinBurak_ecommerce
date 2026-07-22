import {
  SET_CART,
  SET_PAYMENT,
  SET_ADDRESS,
} from '../actions/shoppingCartActions';

const CART_STORAGE_KEY = 'shopping_cart';

const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);

    if (!savedCart) {
      return [];
    }

    const parsedCart = JSON.parse(savedCart);

    return Array.isArray(parsedCart) ? parsedCart : [];
  } catch (error) {
    console.error('Saved cart could not be loaded:', error);
    return [];
  }
};

const initialState = {
  cart: loadCartFromStorage(),
  payment: {},
  address: {},
};

function shoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        cart: action.payload,
      };

    case SET_PAYMENT:
      return {
        ...state,
        payment: action.payload,
      };

    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };

    default:
      return state;
  }
}

export default shoppingCartReducer;