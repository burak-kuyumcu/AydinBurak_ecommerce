import api from '../../services/api';

export const SET_CART = 'SET_CART';
export const SET_PAYMENT = 'SET_PAYMENT';
export const SET_ADDRESS = 'SET_ADDRESS';

export const setCart = (cart) => ({
  type: SET_CART,
  payload: cart,
});

export const setPayment = (payment) => ({
  type: SET_PAYMENT,
  payload: payment,
});

export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: address,
});

export const addToCart = (product) => {
  return (dispatch, getState) => {
    const { shoppingCart } = getState();
    const currentCart = shoppingCart.cart || [];

    const existingItem = currentCart.find(
      (item) => String(item.product.id) === String(product.id)
    );

    let updatedCart;

    if (existingItem) {
      updatedCart = currentCart.map((item) =>
        String(item.product.id) === String(product.id)
          ? { ...item, count: item.count + 1 }
          : item
      );
    } else {
      updatedCart = [
        ...currentCart,
        {
          count: 1,
          checked: true,
          product,
        },
      ];
    }

    dispatch(setCart(updatedCart));
  };
};

export const increaseCartItemCount = (productId) => {
  return (dispatch, getState) => {
    const { shoppingCart } = getState();

    const updatedCart = shoppingCart.cart.map((item) =>
      String(item.product.id) === String(productId)
        ? { ...item, count: item.count + 1 }
        : item
    );

    dispatch(setCart(updatedCart));
  };
};

export const decreaseCartItemCount = (productId) => {
  return (dispatch, getState) => {
    const { shoppingCart } = getState();

    const updatedCart = shoppingCart.cart
      .map((item) =>
        String(item.product.id) === String(productId)
          ? { ...item, count: item.count - 1 }
          : item
      )
      .filter((item) => item.count > 0);

    dispatch(setCart(updatedCart));
  };
};

export const removeFromCart = (productId) => {
  return (dispatch, getState) => {
    const { shoppingCart } = getState();

    const updatedCart = shoppingCart.cart.filter(
      (item) => String(item.product.id) !== String(productId)
    );

    dispatch(setCart(updatedCart));
  };
};

export const toggleCartItemChecked = (productId) => {
  return (dispatch, getState) => {
    const { shoppingCart } = getState();

    const updatedCart = shoppingCart.cart.map((item) =>
      String(item.product.id) === String(productId)
        ? { ...item, checked: !item.checked }
        : item
    );

    dispatch(setCart(updatedCart));
  };
};

export const createOrder = () => {
  return async (dispatch, getState) => {
    const { shoppingCart } = getState();
    const { cart, payment, address } = shoppingCart;

    const checkedItems = cart.filter((item) => item.checked);

    if (!address?.id) {
      return { success: false, message: 'Please select an address.' };
    }

    if (!payment?.id && !payment?.card_no) {
      return { success: false, message: 'Please select a payment card.' };
    }

    if (checkedItems.length === 0) {
      return { success: false, message: 'There is no selected product in cart.' };
    }

    const productsPrice = checkedItems.reduce(
      (total, item) => total + Number(item.product.price || 0) * item.count,
      0
    );

    const payload = {
      address_id: address.id,
      order_date: new Date().toISOString(),
      card_no: payment.card_no,
      card_name: payment.name_on_card,
      card_expire_month: Number(payment.expire_month),
      card_expire_year: Number(payment.expire_year),
      card_cvv: Number(payment.cvv || 321),
      price: Number(productsPrice.toFixed(2)),
      products: checkedItems.map((item) => ({
        product_id: item.product.id,
        count: item.count,
        detail: item.product.name || item.product.title || 'standard',
      })),
    };

    try {
      await api.post('/order', payload);

      dispatch(setCart([]));
      dispatch(setPayment({}));
      dispatch(setAddress({}));

      return {
        success: true,
        message: 'Your order has been created successfully.',
      };
    } catch (error) {
      console.error('Order could not be created:', error);
      return {
        success: false,
        message: error?.response?.data?.message || 'Order could not be created.',
      };
    }
  };
};