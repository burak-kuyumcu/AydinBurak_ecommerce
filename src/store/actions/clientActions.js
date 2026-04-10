import api, { setApiToken } from '../../services/api';

export const SET_USER = 'SET_USER';
export const SET_ROLES = 'SET_ROLES';
export const SET_THEME = 'SET_THEME';
export const SET_LANGUAGE = 'SET_LANGUAGE';
export const SET_ADDRESS_LIST = 'SET_ADDRESS_LIST';
export const SET_CREDIT_CARDS = 'SET_CREDIT_CARDS';

const ADDRESS_STORAGE_KEY = 'mock_addresses';
const CARD_STORAGE_KEY = 'mock_cards';

const readFromStorage = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
};

const writeToStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const createLocalId = () =>
  `${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;

const getAuthConfig = (getState) => {
  const state = getState?.();
  const tokenFromState = state?.client?.user?.token;
  const tokenFromStorage = localStorage.getItem('token');
  const token = tokenFromState || tokenFromStorage;

  if (!token) {
    return {};
  }

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

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

export const setAddressList = (addressList) => ({
  type: SET_ADDRESS_LIST,
  payload: addressList,
});

export const setCreditCards = (creditCards) => ({
  type: SET_CREDIT_CARDS,
  payload: creditCards,
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

      if (userData.token) {
        setApiToken(userData.token);
        localStorage.setItem('token', userData.token);
      } else {
        setApiToken(null);
        localStorage.removeItem('token');
      }

      history.push(previousPath || '/');
      return { success: true };
    } catch (error) {
      localStorage.removeItem('token');
      setApiToken(null);
      dispatch(clearUser());

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
      return { success: false };
    }

    try {
      setApiToken(storedToken);

      const response = await api.get('/verify', {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      });

      const verifiedUser = response.data;

      dispatch(
        setUser({
          ...verifiedUser,
          token: verifiedUser.token || storedToken,
        })
      );

      localStorage.setItem('token', verifiedUser.token || storedToken);
      setApiToken(verifiedUser.token || storedToken);

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

export const fetchAddresses = () => {
  return async (dispatch, getState) => {
    try {
      const response = await api.get('/user/address', getAuthConfig(getState));
      dispatch(setAddressList(response.data));
      return { success: true, source: 'api' };
    } catch (error) {
      const localAddresses = readFromStorage(ADDRESS_STORAGE_KEY);
      dispatch(setAddressList(localAddresses));
      console.warn('API address fetch failed, local fallback used.');
      return { success: true, source: 'local' };
    }
  };
};

export const createAddress = (addressData) => {
  return async (dispatch, getState) => {
    try {
      await api.post('/user/address', addressData, getAuthConfig(getState));
      await dispatch(fetchAddresses());
      return { success: true, source: 'api' };
    } catch (error) {
      const current = readFromStorage(ADDRESS_STORAGE_KEY);
      const newAddress = {
        id: createLocalId(),
        ...addressData,
      };
      const updated = [...current, newAddress];
      writeToStorage(ADDRESS_STORAGE_KEY, updated);
      dispatch(setAddressList(updated));
      console.warn('API address create failed, local fallback used.');
      return { success: true, source: 'local' };
    }
  };
};

export const updateAddress = (addressData) => {
  return async (dispatch, getState) => {
    try {
      await api.put('/user/address', addressData, getAuthConfig(getState));
      await dispatch(fetchAddresses());
      return { success: true, source: 'api' };
    } catch (error) {
      const current = readFromStorage(ADDRESS_STORAGE_KEY);
      const updated = current.map((item) =>
        String(item.id) === String(addressData.id)
          ? { ...item, ...addressData }
          : item
      );
      writeToStorage(ADDRESS_STORAGE_KEY, updated);
      dispatch(setAddressList(updated));
      console.warn('API address update failed, local fallback used.');
      return { success: true, source: 'local' };
    }
  };
};

export const deleteAddress = (addressId) => {
  return async (dispatch, getState) => {
    try {
      await api.delete(`/user/address/${addressId}`, getAuthConfig(getState));
      await dispatch(fetchAddresses());
      return { success: true, source: 'api' };
    } catch (error) {
      const current = readFromStorage(ADDRESS_STORAGE_KEY);
      const updated = current.filter(
        (item) => String(item.id) !== String(addressId)
      );
      writeToStorage(ADDRESS_STORAGE_KEY, updated);
      dispatch(setAddressList(updated));
      console.warn('API address delete failed, local fallback used.');
      return { success: true, source: 'local' };
    }
  };
};

export const fetchCards = () => {
  return async (dispatch, getState) => {
    try {
      const response = await api.get('/user/card', getAuthConfig(getState));
      dispatch(setCreditCards(response.data));
      return { success: true, source: 'api' };
    } catch (error) {
      const localCards = readFromStorage(CARD_STORAGE_KEY);
      dispatch(setCreditCards(localCards));
      console.warn('API card fetch failed, local fallback used.');
      return { success: true, source: 'local' };
    }
  };
};

export const createCard = (cardData) => {
  return async (dispatch, getState) => {
    try {
      await api.post('/user/card', cardData, getAuthConfig(getState));
      await dispatch(fetchCards());
      return { success: true, source: 'api' };
    } catch (error) {
      const current = readFromStorage(CARD_STORAGE_KEY);
      const newCard = {
        id: createLocalId(),
        ...cardData,
      };
      const updated = [...current, newCard];
      writeToStorage(CARD_STORAGE_KEY, updated);
      dispatch(setCreditCards(updated));
      console.warn('API card create failed, local fallback used.');
      return { success: true, source: 'local' };
    }
  };
};

export const updateCard = (cardData) => {
  return async (dispatch, getState) => {
    try {
      await api.put('/user/card', cardData, getAuthConfig(getState));
      await dispatch(fetchCards());
      return { success: true, source: 'api' };
    } catch (error) {
      const current = readFromStorage(CARD_STORAGE_KEY);
      const updated = current.map((item) =>
        String(item.id) === String(cardData.id) ? { ...item, ...cardData } : item
      );
      writeToStorage(CARD_STORAGE_KEY, updated);
      dispatch(setCreditCards(updated));
      console.warn('API card update failed, local fallback used.');
      return { success: true, source: 'local' };
    }
  };
};

export const deleteCard = (cardId) => {
  return async (dispatch, getState) => {
    try {
      await api.delete(`/user/card/${cardId}`, getAuthConfig(getState));
      await dispatch(fetchCards());
      return { success: true, source: 'api' };
    } catch (error) {
      const current = readFromStorage(CARD_STORAGE_KEY);
      const updated = current.filter((item) => String(item.id) !== String(cardId));
      writeToStorage(CARD_STORAGE_KEY, updated);
      dispatch(setCreditCards(updated));
      console.warn('API card delete failed, local fallback used.');
      return { success: true, source: 'local' };
    }
  };
};