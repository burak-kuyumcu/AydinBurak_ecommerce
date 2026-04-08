import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../store/actions/productActions';
import { addToCart } from '../store/actions/shoppingCartActions';

function ProductDetailPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { productId } = useParams();

  const product = useSelector((state) => state.product.productDetail);
  const fetchState = useSelector((state) => state.product.fetchState);

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (fetchState === 'FETCHING' || !product) {
    return (
      <div className="flex min-h-[500px] items-center justify-center bg-[#FAFAFA]">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#E6E6E6] border-t-[#23A6F0]" />
      </div>
    );
  }

  return (
    <section className="w-full bg-[#FAFAFA]">
      <div className="mx-auto flex w-full max-w-330 flex-col gap-8 px-4 py-10 md:px-6 xl:px-8">
        <button
          onClick={() => history.goBack()}
          className="w-fit rounded border border-[#23A6F0] px-5 py-2 text-[14px] font-semibold text-[#23A6F0]"
        >
          Back
        </button>

        <div className="flex flex-col gap-8 rounded-[10px] bg-white p-6 md:flex-row md:p-8">
          <div className="w-full md:w-1/2">
            <img
              src={
                product.images?.[0]?.url ||
                product.images?.[0] ||
                'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80'
              }
              alt={product.name}
              className="h-[350px] w-full object-cover md:h-[500px]"
            />
          </div>

          <div className="flex w-full flex-col gap-5 md:w-1/2">
            <h1 className="text-[32px] font-bold text-[#252B42]">
              {product.name}
            </h1>

            <p className="text-[24px] font-bold text-[#23856D]">
              ${product.price}
            </p>

            <div className="flex items-center gap-4">
              <span className="text-[14px] text-[#737373]">
                Rating: {product.rating}
              </span>
              <span className="text-[14px] text-[#737373]">
                Stock: {product.stock}
              </span>
              <span className="text-[14px] text-[#737373]">
                Sell Count: {product.sell_count}
              </span>
            </div>

            <p className="text-[16px] leading-7 text-[#737373]">
              {product.description}
            </p>

            <div className="flex items-center gap-3">
              <span className="h-5 w-5 rounded-full bg-[#23A6F0]" />
              <span className="h-5 w-5 rounded-full bg-[#23856D]" />
              <span className="h-5 w-5 rounded-full bg-[#E77C40]" />
              <span className="h-5 w-5 rounded-full bg-[#252B42]" />
            </div>

            <button
              onClick={handleAddToCart}
              className="w-fit bg-[#23A6F0] px-8 py-3 text-[14px] font-bold text-white"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailPage;