import api, { setApiToken } from '../../services/api';

export const SET_USER = 'SET_USER';
export const SET_ROLES = 'SET_ROLES';
export const SET_THEME = 'SET_THEME';
export const SET_LANGUAGE = 'SET_LANGUAGE';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const clearUser = () => ({
  type: SET_USER,
  payload: {},
});

export const setRoles = (roles) => ({
  type: SET_ROLES,
  payload: roles,
});

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});

export const fetchRolesIfNeeded = () => {
  return async (dispatch, getState) => {
    const { client } = getState();

    if (client.roles && client.roles.length > 0) {
      return;
    }

    try {
      const response = await api.get('/roles');
      dispatch(setRoles(response.data));
    } catch (error) {
      console.error('Roles could not be fetched:', error);
    }
  };
};

export const loginUser = (formData, history, previousPath) => {
  return async (dispatch) => {
    try {
      const response = await api.post('/login', {
        email: formData.email,
        password: formData.password,
      });

      const userData = response.data;

      dispatch(setUser(userData));

      if (formData.rememberMe && userData.token) {
        localStorage.setItem('token', userData.token);
        setApiToken(userData.token);
      } else {
        localStorage.removeItem('token');
        setApiToken(null);
      }

      history.push(previousPath || '/');
      return { success: true };
    } catch (error) {
      const message =
        error?.response?.data?.message || 'Login failed. Please try again.';
      return { success: false, message };
    }
  };
};

export const verifyStoredToken = () => {
  return async (dispatch) => {
    const storedToken = localStorage.getItem('token');

    if (!storedToken) {
      return;
    }

    try {
      setApiToken(storedToken);

      const response = await api.get('/verify');
      const verifiedUser = response.data;

      dispatch(setUser(verifiedUser));

      if (verifiedUser.token) {
        localStorage.setItem('token', verifiedUser.token);
        setApiToken(verifiedUser.token);
      } else {
        localStorage.setItem('token', storedToken);
        setApiToken(storedToken);
      }

      return { success: true };
    } catch (error) {
      localStorage.removeItem('token');
      setApiToken(null);
      dispatch(clearUser());

      return { success: false };
    }
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    localStorage.removeItem('token');
    setApiToken(null);
    dispatch(clearUser());
  };
};