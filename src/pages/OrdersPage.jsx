import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../store/actions/orderActions';
import { ChevronDown, ChevronUp } from 'lucide-react';

function OrdersPage() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  const fetchState = useSelector((state) => state.order.fetchState);

  const [openOrderId, setOpenOrderId] = useState(null);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const toggleOrder = (orderId) => {
    setOpenOrderId((prev) => (prev === orderId ? null : orderId));
  };

  if (fetchState === 'FETCHING') {
    return (
      <div className="flex min-h-[500px] items-center justify-center bg-[#FAFAFA]">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#E6E6E6] border-t-[#23A6F0]" />
      </div>
    );
  }

  return (
    <section className="w-full bg-[#FAFAFA]">
      <div className="mx-auto flex w-full max-w-330 flex-col gap-6 px-4 py-10 md:px-6 xl:px-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-[32px] font-bold text-[#252B42]">
            Previous Orders
          </h1>
          <p className="text-[14px] text-[#737373]">
            Review your past orders and order details
          </p>
        </div>

        {orders.length === 0 ? (
          <div className="rounded-[10px] bg-white p-8 text-center text-[16px] text-[#737373]">
            No previous orders found.
          </div>
        ) : (
          <div className="overflow-hidden rounded-[10px] bg-white shadow-sm">
            <div className="hidden grid-cols-[1.2fr_1fr_1fr_120px] gap-4 border-b border-[#E6E6E6] bg-[#F8F8F8] px-6 py-4 md:grid">
              <span className="text-[14px] font-bold text-[#252B42]">Order Date</span>
              <span className="text-[14px] font-bold text-[#252B42]">Card Name</span>
              <span className="text-[14px] font-bold text-[#252B42]">Total Price</span>
              <span className="text-[14px] font-bold text-[#252B42]">Details</span>
            </div>

            <div className="flex flex-col">
              {orders.map((orderItem) => (
                <div
                  key={orderItem.id}
                  className="border-b border-[#E6E6E6] last:border-b-0"
                >
                  <div className="flex flex-col gap-3 px-4 py-4 md:grid md:grid-cols-[1.2fr_1fr_1fr_120px] md:items-center md:gap-4 md:px-6">
                    <div className="flex flex-col">
                      <span className="text-[12px] text-[#737373] md:hidden">
                        Order Date
                      </span>
                      <span className="text-[14px] text-[#252B42]">
                        {orderItem.order_date}
                      </span>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-[12px] text-[#737373] md:hidden">
                        Card Name
                      </span>
                      <span className="text-[14px] text-[#252B42]">
                        {orderItem.card_name}
                      </span>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-[12px] text-[#737373] md:hidden">
                        Total Price
                      </span>
                      <span className="text-[14px] font-bold text-[#23856D]">
                        ${Number(orderItem.price || 0).toFixed(2)}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleOrder(orderItem.id)}
                      className="flex items-center gap-2 text-[14px] font-semibold text-[#23A6F0]"
                    >
                      {openOrderId === orderItem.id ? (
                        <>
                          Hide
                          <ChevronUp size={16} />
                        </>
                      ) : (
                        <>
                          Show
                          <ChevronDown size={16} />
                        </>
                      )}
                    </button>
                  </div>

                  {openOrderId === orderItem.id && (
                    <div className="bg-[#FAFAFA] px-4 py-4 md:px-6">
                      <div className="overflow-x-auto rounded-[8px] border border-[#E6E6E6] bg-white">
                        <div className="grid min-w-[600px] grid-cols-[100px_1fr_100px_1fr] gap-4 border-b border-[#E6E6E6] px-4 py-3">
                          <span className="text-[13px] font-bold text-[#252B42]">
                            Product ID
                          </span>
                          <span className="text-[13px] font-bold text-[#252B42]">
                            Detail
                          </span>
                          <span className="text-[13px] font-bold text-[#252B42]">
                            Count
                          </span>
                          <span className="text-[13px] font-bold text-[#252B42]">
                            Line Total
                          </span>
                        </div>

                        {(orderItem.products || []).map((product) => (
                          <div
                            key={`${orderItem.id}-${product.product_id}`}
                            className="grid min-w-[600px] grid-cols-[100px_1fr_100px_1fr] gap-4 border-b border-[#F1F1F1] px-4 py-3 last:border-b-0"
                          >
                            <span className="text-[13px] text-[#252B42]">
                              {product.product_id}
                            </span>
                            <span className="text-[13px] text-[#737373]">
                              {product.detail}
                            </span>
                            <span className="text-[13px] text-[#252B42]">
                              {product.count}
                            </span>
                            <span className="text-[13px] font-semibold text-[#23856D]">
                              -
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default OrdersPage;