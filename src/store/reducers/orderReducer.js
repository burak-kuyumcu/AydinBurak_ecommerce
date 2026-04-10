import {
  SET_ORDERS,
  SET_ORDERS_FETCH_STATE,
} from '../actions/orderActions';

const initialState = {
  orders: [],
  fetchState: 'NOT_FETCHED',
};

function orderReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ORDERS:
      return { ...state, orders: action.payload };

    case SET_ORDERS_FETCH_STATE:
      return { ...state, fetchState: action.payload };

    default:
      return state;
  }
}

export default orderReducer;