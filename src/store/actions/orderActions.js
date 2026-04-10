import api from '../../services/api';

export const SET_ORDERS = 'SET_ORDERS';
export const SET_ORDERS_FETCH_STATE = 'SET_ORDERS_FETCH_STATE';

export const setOrders = (orders) => ({
  type: SET_ORDERS,
  payload: orders,
});

export const setOrdersFetchState = (fetchState) => ({
  type: SET_ORDERS_FETCH_STATE,
  payload: fetchState,
});

export const fetchOrders = () => {
  return async (dispatch) => {
    try {
      dispatch(setOrdersFetchState('FETCHING'));
      const response = await api.get('/order');
      dispatch(setOrders(response.data));
      dispatch(setOrdersFetchState('FETCHED'));
      return { success: true };
    } catch (error) {
      dispatch(setOrdersFetchState('FAILED'));
      console.error('Orders could not be fetched:', error);
      return { success: false };
    }
  };
};