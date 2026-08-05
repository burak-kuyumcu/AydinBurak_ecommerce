import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ProductCard from '../components/ProductCard';
import HomeHeroSlider from '../components/HomeHeroSlider';
import EditorsPick from '../components/EditorsPick';
import FeaturedPosts from '../components/FeaturedPosts';
import VitaSlider from '../components/VitaSlider';

import {
  fetchCategoriesIfNeeded,
  fetchProducts,
} from '../store/actions/productActions';

function HomePage() {
  const dispatch = useDispatch();

  const categories = useSelector(
    (state) => state.product.categories
  );

  const productList = useSelector(
    (state) => state.product.productList
  );

  const fetchState = useSelector(
    (state) => state.product.fetchState
  );

  useEffect(() => {
    dispatch(fetchCategoriesIfNeeded());

    dispatch(
      fetchProducts({
        limit: 25,
        offset: 0,
      })
    );
  }, [dispatch]);

  const slugify = (value = '') => {
    return String(value)
      .trim()
      .toLowerCase()
      .replaceAll(' ', '-')
      .replaceAll('ı', 'i')
      .replaceAll('ş', 's')
      .replaceAll('ç', 'c')
      .replaceAll('ö', 'o')
      .replaceAll('ü', 'u')
      .replaceAll('ğ', 'g');
  };

  const formatCategoryPath = (category) => {
    const genderValue = String(
      category.gender || ''
    ).toLowerCase();

    const genderText =
      genderValue === 'k' ||
      genderValue === 'kadın' ||
      genderValue === 'kadin'
        ? 'kadin'
        : 'erkek';

    const categoryName = slugify(
      category.title || category.name || ''
    );

    return `/shop/${genderText}/${categoryName}/${category.id}`;
  };

  const formatProductDetailPath = (product) => {
    const category = product.category || {};

    const genderValue = String(
      category.gender || ''
    ).toLowerCase();

    const genderText =
      genderValue === 'k' ||
      genderValue === 'kadın' ||
      genderValue === 'kadin'
        ? 'kadin'
        : 'erkek';

    const categoryName = slugify(
      category.title || 'kategori'
    );

    const categoryId =
      category.id ||
      product.category_id ||
      product.categoryId ||
      0;

    const productSlug = slugify(
      product.name || product.title || 'urun'
    );

    return `/shop/${genderText}/${categoryName}/${categoryId}/${productSlug}/${product.id}`;
  };

  const topCategories = [...categories]
    .sort(
      (firstCategory, secondCategory) =>
        Number(secondCategory.rating || 0) -
        Number(firstCategory.rating || 0)
    )
    .slice(0, 5);

  const bestsellerProducts = [...productList]
    .sort((firstProduct, secondProduct) => {
      const firstSellCount = Number(
        firstProduct.sell_count ??
          firstProduct.sellCount ??
          0
      );

      const secondSellCount = Number(
        secondProduct.sell_count ??
          secondProduct.sellCount ??
          0
      );

      return secondSellCount - firstSellCount;
    })
    .slice(0, 8);

  return (
    <div className="flex w-full flex-col bg-white">
      <HomeHeroSlider />

      <EditorsPick />

      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-330 flex-col gap-8 px-4 py-12 md:px-6 xl:px-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="text-[24px] font-bold text-[#252B42]">
              Top Categories
            </h2>

            <p className="text-[14px] text-[#737373]">
              Most popular categories by rating
            </p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:flex-wrap lg:flex-nowrap">
            {topCategories.map((category) => (
              <Link
                key={category.id}
                to={formatCategoryPath(category)}
                className="relative block w-full overflow-hidden md:w-[calc(50%-8px)] lg:w-[20%]"
              >
                <img
                  src={
                    category.img ||
                    category.image ||
                    'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80'
                  }
                  alt={
                    category.title ||
                    category.name ||
                    'Category'
                  }
                  className="h-75 w-full object-cover md:h-[223px]"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/25 text-white">
                  <h3 className="text-[16px] font-bold">
                    {category.title || category.name}
                  </h3>

                  <p className="text-[14px]">
                    Rating: {category.rating || 0}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-330 flex-col gap-10 px-4 py-12 md:px-6 xl:px-8">
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="text-[20px] text-[#737373]">
              Featured Products
            </span>

            <h2 className="text-[24px] font-bold text-[#252B42]">
              BESTSELLER PRODUCTS
            </h2>

            <p className="text-[14px] text-[#737373]">
              Most popular products by sales
            </p>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:gap-7.5">
            {fetchState === 'FETCHING' &&
            bestsellerProducts.length === 0 ? (
              <div className="flex min-h-[300px] w-full items-center justify-center">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#E6E6E6] border-t-[#23A6F0]" />
              </div>
            ) : bestsellerProducts.length > 0 ? (
              bestsellerProducts.map((product) => (
                <div
                  key={product.id}
                  className="w-full md:w-[calc(50%-15px)] lg:w-[calc(25%-24px)]"
                >
                  <ProductCard
                    title={
                      product.name ||
                      product.title ||
                      'Ürün'
                    }
                    department={
                      product.category?.title ||
                      product.category?.name ||
                      'Kategori'
                    }
                    price={product.price}
                    image={
                      product.images?.[0]?.url ||
                      product.images?.[0] ||
                      product.image ||
                      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80'
                    }
                    detailPath={formatProductDetailPath(
                      product
                    )}
                  />
                </div>
              ))
            ) : (
              <div className="flex min-h-[200px] w-full items-center justify-center">
                <p className="text-[14px] text-[#737373]">
                  Featured products could not be loaded.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <VitaSlider />

      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-330 flex-col gap-8 px-4 py-12 md:flex-row md:items-center md:px-6 xl:px-8">
          <div className="flex w-full justify-center md:w-1/2">
            <img
              src="/neural.png"
              alt="Promo"
              className="h-[260px] w-full max-w-[510px] object-cover md:h-[320px]"
            />
          </div>

          <div className="flex w-full flex-col gap-4 md:w-1/2 md:pl-8">
            <span className="text-[16px] font-bold text-[#BDBDBD]">
              SUMMER 2020
            </span>

            <h2 className="max-w-[320px] text-[40px] font-bold leading-[50px] text-[#252B42]">
              Part of the Neural Universe
            </h2>

            <p className="max-w-[320px] text-[14px] leading-6 text-[#737373]">
              We know how large objects will act, but things
              on a small scale.
            </p>

            <div className="flex gap-3">
              <Link
                to="/shop"
                className="bg-[#2DC071] px-8 py-3 text-[14px] font-bold text-white"
              >
                BUY NOW
              </Link>

              <Link
                to="/shop"
                className="border border-[#2DC071] px-8 py-3 text-[14px] font-bold text-[#2DC071]"
              >
                READ MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FeaturedPosts />
    </div>
  );
}

export default HomePage;