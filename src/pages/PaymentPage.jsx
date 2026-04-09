import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCards,
  createCard,
  updateCard,
  deleteCard,
} from '../store/actions/clientActions';
import { ChevronRight, Trash2, Pencil } from 'lucide-react';

const emptyForm = {
  card_no: '',
  expire_month: '',
  expire_year: '',
  name_on_card: '',
};

function PaymentPage() {
  const dispatch = useDispatch();
  const creditCards = useSelector((state) => state.client.creditCards);
  const cart = useSelector((state) => state.shoppingCart.cart);

  const [showForm, setShowForm] = useState(false);
  const [editingCardId, setEditingCardId] = useState(null);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [formData, setFormData] = useState(emptyForm);
  const [use3DSecure, setUse3DSecure] = useState(false);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  const selectedItems = useMemo(() => {
    return cart.filter((item) => item.checked);
  }, [cart]);

  const productsTotal = useMemo(() => {
    return selectedItems.reduce((total, item) => {
      return total + Number(item.product.price || 0) * item.count;
    }, 0);
  }, [selectedItems]);

  const shippingTotal = useMemo(() => {
    return selectedItems.length > 0 ? 29.99 : 0;
  }, [selectedItems]);

  const discountTotal = useMemo(() => {
    return productsTotal >= 150 ? 29.99 : 0;
  }, [productsTotal]);

  const grandTotal = useMemo(() => {
    return productsTotal + shippingTotal - discountTotal;
  }, [productsTotal, shippingTotal, discountTotal]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddNew = () => {
    setEditingCardId(null);
    setFormData(emptyForm);
    setShowForm(true);
  };

  const handleEdit = (card) => {
    setEditingCardId(card.id);
    setFormData({
      card_no: card.card_no || '',
      expire_month: String(card.expire_month || ''),
      expire_year: String(card.expire_year || ''),
      name_on_card: card.name_on_card || '',
    });
    setShowForm(true);
  };

  const handleDelete = async (cardId) => {
    await dispatch(deleteCard(cardId));
    if (selectedCardId === cardId) {
      setSelectedCardId(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let result;

    if (editingCardId) {
      result = await dispatch(
        updateCard({
          id: editingCardId,
          ...formData,
          expire_month: Number(formData.expire_month),
          expire_year: Number(formData.expire_year),
        })
      );
    } else {
      result = await dispatch(
        createCard({
          ...formData,
          expire_month: Number(formData.expire_month),
          expire_year: Number(formData.expire_year),
        })
      );
    }

    if (result.success) {
      setShowForm(false);
      setEditingCardId(null);
      setFormData(emptyForm);
    }
  };

  const formatCardNumber = (cardNumber) => {
    if (!cardNumber) {
      return '';
    }

    const visible = String(cardNumber).slice(-4);
    return `**** **** **** ${visible}`;
  };

  return (
    <section className="w-full bg-[#FAFAFA]">
      <div className="mx-auto flex w-full max-w-330 flex-col gap-6 px-4 py-10 md:px-6 xl:px-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-[32px] font-bold text-[#252B42]">
            Payment Methods
          </h1>
          <p className="text-[14px] text-[#737373]">
            Add and manage your saved cards
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          <div className="flex w-full flex-col gap-4 lg:w-[70%]">
            <div className="rounded-[10px] bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-[24px] font-bold text-[#252B42]">
                  Saved Cards
                </h2>

                <button
                  onClick={handleAddNew}
                  className="rounded-[8px] bg-[#23A6F0] px-4 py-2 text-[14px] font-semibold text-white"
                >
                  Add New Card
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {creditCards.length === 0 ? (
                  <p className="text-[14px] text-[#737373]">
                    No saved card found.
                  </p>
                ) : (
                  creditCards.map((card) => (
                    <div
                      key={card.id}
                      className={`rounded-[10px] border p-4 transition ${
                        selectedCardId === card.id
                          ? 'border-[#23A6F0] bg-[#F7FCFF]'
                          : 'border-[#E6E6E6]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <input
                            type="radio"
                            name="selectedCard"
                            checked={selectedCardId === card.id}
                            onChange={() => setSelectedCardId(card.id)}
                            className="mt-1"
                          />

                          <div className="flex flex-col gap-2">
                            <h3 className="text-[18px] font-bold text-[#252B42]">
                              {card.name_on_card}
                            </h3>

                            <p className="text-[14px] text-[#737373]">
                              {formatCardNumber(card.card_no)}
                            </p>

                            <p className="text-[14px] text-[#737373]">
                              {card.expire_month} / {card.expire_year}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => handleEdit(card)}
                            className="text-[#23A6F0]"
                          >
                            <Pencil size={18} />
                          </button>

                          <button
                            onClick={() => handleDelete(card.id)}
                            className="text-[#E74040]"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="rounded-[10px] bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-[24px] font-bold text-[#252B42]">
                  Card Information
                </h2>

                <button
                  type="button"
                  onClick={handleAddNew}
                  className="text-[14px] font-semibold text-[#737373] underline"
                >
                  Pay with saved cards
                </button>
              </div>

              {(showForm || creditCards.length === 0) && (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    name="card_no"
                    value={formData.card_no}
                    onChange={handleChange}
                    placeholder="Card Number"
                    className="h-11 border border-[#E6E6E6] px-3 outline-none"
                  />

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <select
                      name="expire_month"
                      value={formData.expire_month}
                      onChange={handleChange}
                      className="h-11 border border-[#E6E6E6] px-3 outline-none"
                    >
                      <option value="">Month</option>
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>

                    <select
                      name="expire_year"
                      value={formData.expire_year}
                      onChange={handleChange}
                      className="h-11 border border-[#E6E6E6] px-3 outline-none"
                    >
                      <option value="">Year</option>
                      {Array.from({ length: 12 }, (_, i) => {
                        const year = new Date().getFullYear() + i;
                        return (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        );
                      })}
                    </select>

                    <input
                      name="name_on_card"
                      value={formData.name_on_card}
                      onChange={handleChange}
                      placeholder="Name on Card"
                      className="h-11 border border-[#E6E6E6] px-3 outline-none"
                    />
                  </div>

                  <label className="flex items-center gap-2 text-[14px] text-[#737373]">
                    <input
                      type="checkbox"
                      checked={use3DSecure}
                      onChange={() => setUse3DSecure((prev) => !prev)}
                    />
                    I want to pay with 3D Secure
                  </label>

                  <div className="flex items-center gap-3">
                    <button
                      type="submit"
                      className="rounded-[8px] bg-[#23A6F0] px-5 py-3 text-[14px] font-semibold text-white"
                    >
                      {editingCardId ? 'Update Card' : 'Save Card'}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setShowForm(false);
                        setEditingCardId(null);
                        setFormData(emptyForm);
                      }}
                      className="rounded-[8px] border border-[#E6E6E6] px-5 py-3 text-[14px] font-semibold text-[#252B42]"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          <div className="w-full lg:sticky lg:top-6 lg:w-[30%]">
            <div className="rounded-[10px] bg-white p-5 shadow-sm">
              <button
                type="button"
                className="mb-5 flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#23A6F0] px-4 py-3 text-[16px] font-bold text-white"
              >
                Complete Payment
                <ChevronRight size={18} />
              </button>

              <div className="rounded-[8px] border border-[#E6E6E6] p-4">
                <h3 className="mb-4 text-[24px] font-bold text-[#252B42]">
                  Order Summary
                </h3>

                <div className="flex flex-col gap-3 text-[14px] text-[#737373]">
                  <div className="flex items-center justify-between">
                    <span>Products Total</span>
                    <span className="font-semibold text-[#252B42]">
                      ${productsTotal.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span>Shipping</span>
                    <span className="font-semibold text-[#252B42]">
                      $29.99
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
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#23A6F0] px-4 py-3 text-[16px] font-bold text-white"
              >
                Complete Payment
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaymentPage;