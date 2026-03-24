import { combineReducers } from 'redux';

const initialUserState = {
  users: [],
  loading: false,
  error: null,
};

function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, users: action.payload };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default combineReducers({
  user: userReducer,
});