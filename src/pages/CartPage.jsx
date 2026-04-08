import { useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  increaseCartItemCount,
  decreaseCartItemCount,
  removeFromCart,
  toggleCartItemChecked,
} from '../store/actions/shoppingCartActions';
import { Trash2, ChevronRight } from 'lucide-react';

function CartPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector((state) => state.shoppingCart.cart);

  const handleCreateOrder = () => {
    history.push('/checkout/address');
  };

  const selectedItems = useMemo(() => {
    return cart.filter((item) => item.checked);
  }, [cart]);

  const productsTotal = useMemo(() => {
    return selectedItems.reduce((total, item) => {
      return total + Number(item.product.price || 0) * item.count;
    }, 0);
  }, [selectedItems]);

  const shippingTotal = useMemo(() => {
    if (selectedItems.length === 0) {
      return 0;
    }
    return 29.99;
  }, [selectedItems]);

  const discountTotal = useMemo(() => {
    if (productsTotal >= 150) {
      return 29.99;
    }
    return 0;
  }, [productsTotal]);

  const grandTotal = useMemo(() => {
    return productsTotal + shippingTotal - discountTotal;
  }, [productsTotal, shippingTotal, discountTotal]);

  const selectedCount = useMemo(() => {
    return selectedItems.length;
  }, [selectedItems]);

  return (
    <section className="w-full bg-[#FAFAFA]">
      <div className="mx-auto flex w-full max-w-330 flex-col gap-6 px-4 py-10 md:px-6 xl:px-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-[32px] font-bold text-[#252B42]">
            Shopping Cart
          </h1>
          <p className="text-[14px] text-[#737373]">
            {cart.length} product(s) in your cart
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="rounded-[10px] bg-white p-8 text-center text-[16px] text-[#737373]">
            Your cart is empty.
          </div>
        ) : (
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
            <div className="flex w-full flex-col gap-4 lg:w-[70%]">
              {cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex flex-col gap-4 rounded-[10px] bg-white p-4 shadow-sm md:flex-row md:items-center"
                >
                  <div className="flex items-center gap-4 md:w-[52%]">
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() =>
                        dispatch(toggleCartItemChecked(item.product.id))
                      }
                      className="h-4 w-4"
                    />

                    <img
                      src={
                        item.product.images?.[0]?.url ||
                        item.product.images?.[0] ||
                        item.product.image ||
                        'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80'
                      }
                      alt={item.product.name || item.product.title}
                      className="h-24 w-24 rounded object-cover"
                    />

                    <div className="flex flex-col gap-2">
                      <h2 className="text-[16px] font-bold text-[#252B42]">
                        {item.product.name || item.product.title}
                      </h2>

                      <p className="text-[14px] text-[#737373]">
                        {item.product.description
                          ? item.product.description.slice(0, 80) + '...'
                          : 'Product description'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 md:w-[20%] md:justify-center">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          dispatch(decreaseCartItemCount(item.product.id))
                        }
                        className="flex h-8 w-8 items-center justify-center rounded border border-[#E6E6E6] text-[18px] text-[#252B42]"
                      >
                        -
                      </button>

                      <span className="min-w-[20px] text-center text-[14px] font-semibold text-[#252B42]">
                        {item.count}
                      </span>

                      <button
                        onClick={() =>
                          dispatch(increaseCartItemCount(item.product.id))
                        }
                        className="flex h-8 w-8 items-center justify-center rounded border border-[#E6E6E6] text-[18px] text-[#252B42]"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:w-[18%] md:justify-center">
                    <span className="text-[18px] font-bold text-[#23856D]">
                      ${(Number(item.product.price || 0) * item.count).toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center justify-end md:w-[10%]">
                    <button
                      onClick={() => dispatch(removeFromCart(item.product.id))}
                      className="text-[#E74040]"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full lg:sticky lg:top-6 lg:w-[30%]">
              <div className="rounded-[10px] bg-white p-5 shadow-sm">
                <button
                  type="button"
                  onClick={handleCreateOrder}
                  className="mb-5 flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#23A6F0] px-4 py-3 text-[16px] font-bold text-white"
                >
                  Create Order
                  <ChevronRight size={18} />
                </button>

                <div className="rounded-[8px] border border-[#E6E6E6] p-4">
                  <h3 className="mb-4 text-[24px] font-bold text-[#252B42]">
                    Order Summary
                  </h3>

                  <div className="flex flex-col gap-3 text-[14px] text-[#737373]">
                    <div className="flex items-center justify-between">
                      <span>Selected Products</span>
                      <span className="font-semibold text-[#252B42]">
                        {selectedCount}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Products Total</span>
                      <span className="font-semibold text-[#252B42]">
                        ${productsTotal.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Shipping</span>
                      <span className="font-semibold text-[#252B42]">
                        ${shippingTotal.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Discount</span>
                      <span className="font-semibold text-[#E77C40]">
                        -${discountTotal.toFixed(2)}
                      </span>
                    </div>

                    <div className="mt-2 border-t border-[#E6E6E6] pt-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[16px] font-bold text-[#252B42]">
                          Grand Total
                        </span>
                        <span className="text-[24px] font-bold text-[#23856D]">
                          ${grandTotal.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCreateOrder}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#23A6F0] px-4 py-3 text-[16px] font-bold text-white"
                >
                  Create Order
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default CartPage;