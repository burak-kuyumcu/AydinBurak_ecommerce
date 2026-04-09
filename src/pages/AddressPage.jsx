import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAddresses,
  createAddress,
  updateAddress,
  deleteAddress,
} from '../store/actions/clientActions';
import { setAddress } from '../store/actions/shoppingCartActions';
import { ChevronRight, Trash2, Pencil } from 'lucide-react';
import { useHistory } from 'react-router-dom';

const emptyForm = {
  title: '',
  name: '',
  surname: '',
  phone: '',
  city: '',
  district: '',
  neighborhood: '',
};

function AddressPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const addressList = useSelector((state) => state.client.addressList);
  const cart = useSelector((state) => state.shoppingCart.cart);
  const selectedAddress = useSelector((state) => state.shoppingCart.address);

  const [showForm, setShowForm] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState(null);
  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => {
    dispatch(fetchAddresses());
  }, [dispatch]);

  const selectedItems = cart.filter((item) => item.checked);

  const productsTotal = selectedItems.reduce(
    (total, item) => total + Number(item.product.price || 0) * item.count,
    0
  );

  const shippingTotal = selectedItems.length > 0 ? 29.99 : 0;
  const discountTotal = productsTotal >= 150 ? 29.99 : 0;
  const grandTotal = productsTotal + shippingTotal - discountTotal;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddNew = () => {
    setEditingAddressId(null);
    setFormData(emptyForm);
    setShowForm(true);
  };

  const handleEdit = (address) => {
    setEditingAddressId(address.id);
    setFormData({
      title: address.title || '',
      name: address.name || '',
      surname: address.surname || '',
      phone: address.phone || '',
      city: address.city || '',
      district: address.district || '',
      neighborhood: address.neighborhood || '',
    });
    setShowForm(true);
  };

  const handleDelete = async (addressId) => {
    await dispatch(deleteAddress(addressId));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let result;

    if (editingAddressId) {
      result = await dispatch(
        updateAddress({
          id: editingAddressId,
          ...formData,
        })
      );
    } else {
      result = await dispatch(createAddress(formData));
    }

    if (result.success) {
      setShowForm(false);
      setEditingAddressId(null);
      setFormData(emptyForm);
    }
  };

  return (
    <section className="w-full bg-[#FAFAFA]">
      <div className="mx-auto flex w-full max-w-330 flex-col gap-6 px-4 py-10 md:px-6 xl:px-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-[32px] font-bold text-[#252B42]">
            Address Information
          </h1>
          <p className="text-[14px] text-[#737373]">
            Add and manage your shipping and billing addresses
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          <div className="flex w-full flex-col gap-4 lg:w-[70%]">
            <div className="rounded-[10px] bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-[24px] font-bold text-[#252B42]">
                  Saved Addresses
                </h2>

                <button
                  onClick={handleAddNew}
                  className="rounded-[8px] bg-[#23A6F0] px-4 py-2 text-[14px] font-semibold text-white"
                >
                  Add Address
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {addressList.length === 0 ? (
                  <p className="text-[14px] text-[#737373]">
                    No address found.
                  </p>
                ) : (
                  addressList.map((address) => (
                    <div
                      key={address.id}
                      className={`rounded-[10px] border p-4 ${
                        selectedAddress?.id === address.id
                          ? 'border-[#23A6F0] bg-[#F7FCFF]'
                          : 'border-[#E6E6E6]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex flex-col gap-2">
                          <h3 className="text-[18px] font-bold text-[#252B42]">
                            {address.title}
                          </h3>

                          <p className="text-[14px] text-[#737373]">
                            {address.name} {address.surname}
                          </p>

                          <p className="text-[14px] text-[#737373]">
                            {address.phone}
                          </p>

                          <p className="text-[14px] text-[#737373]">
                            {address.city} / {address.district}
                          </p>

                          <p className="text-[14px] text-[#737373]">
                            {address.neighborhood}
                          </p>
                        </div>

                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => dispatch(setAddress(address))}
                            className="rounded-[8px] border border-[#23A6F0] px-3 py-2 text-[13px] font-semibold text-[#23A6F0]"
                          >
                            Select
                          </button>

                          <button
                            onClick={() => handleEdit(address)}
                            className="text-[#23A6F0]"
                          >
                            <Pencil size={18} />
                          </button>

                          <button
                            onClick={() => handleDelete(address.id)}
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

            {showForm && (
              <div className="rounded-[10px] bg-white p-5 shadow-sm">
                <h2 className="mb-4 text-[24px] font-bold text-[#252B42]">
                  {editingAddressId ? 'Update Address' : 'Add New Address'}
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Address Title"
                    className="h-11 border border-[#E6E6E6] px-3 outline-none"
                  />

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="h-11 border border-[#E6E6E6] px-3 outline-none"
                    />

                    <input
                      name="surname"
                      value={formData.surname}
                      onChange={handleChange}
                      placeholder="Surname"
                      className="h-11 border border-[#E6E6E6] px-3 outline-none"
                    />
                  </div>

                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="h-11 border border-[#E6E6E6] px-3 outline-none"
                  />

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <input
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="City"
                      className="h-11 border border-[#E6E6E6] px-3 outline-none"
                    />

                    <input
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      placeholder="District"
                      className="h-11 border border-[#E6E6E6] px-3 outline-none"
                    />
                  </div>

                  <textarea
                    name="neighborhood"
                    value={formData.neighborhood}
                    onChange={handleChange}
                    placeholder="Neighborhood / Address Details"
                    rows="4"
                    className="border border-[#E6E6E6] px-3 py-3 outline-none"
                  />

                  <div className="flex items-center gap-3">
                    <button
                      type="submit"
                      className="rounded-[8px] bg-[#23A6F0] px-5 py-3 text-[14px] font-semibold text-white"
                    >
                      {editingAddressId ? 'Update Address' : 'Save Address'}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setShowForm(false);
                        setEditingAddressId(null);
                        setFormData(emptyForm);
                      }}
                      className="rounded-[8px] border border-[#E6E6E6] px-5 py-3 text-[14px] font-semibold text-[#252B42]"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          <div className="w-full lg:sticky lg:top-6 lg:w-[30%]">
            <div className="rounded-[10px] bg-white p-5 shadow-sm">
              <button
                type="button"
                onClick={() => history.push('/checkout/payment')}
                className="mb-5 flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#23A6F0] px-4 py-3 text-[16px] font-bold text-white"
              >
                Continue to Payment
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
                onClick={() => history.push('/checkout/payment')}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#23A6F0] px-4 py-3 text-[16px] font-bold text-white"
              >
                Continue to Payment
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddressPage;