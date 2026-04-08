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