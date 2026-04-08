import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import HomeHeroSlider from '../components/HomeHeroSlider';
import EditorsPick from '../components/EditorsPick';
import FeaturedPosts from '../components/FeaturedPosts';
import { fetchCategoriesIfNeeded } from '../store/actions/productActions';

function HomePage() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.product.categories);

  useEffect(() => {
    dispatch(fetchCategoriesIfNeeded());
  }, [dispatch]);

  const products = [
    {
      id: 1,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 7,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 8,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const formatCategoryPath = (category) => {
    const genderValue = String(category.gender || '').toLowerCase();
    const genderText =
      genderValue === 'k' || genderValue === 'kadın' || genderValue === 'kadin'
        ? 'kadin'
        : 'erkek';

    const rawName = category.title || category.name || '';

    const categoryName = rawName
      .toLowerCase()
      .replaceAll(' ', '-')
      .replaceAll('ı', 'i')
      .replaceAll('ş', 's')
      .replaceAll('ç', 'c')
      .replaceAll('ö', 'o')
      .replaceAll('ü', 'u')
      .replaceAll('ğ', 'g');

    return `/shop/${genderText}/${categoryName}/${category.id}`;
  };

  const topCategories = [...categories]
    .sort((a, b) => Number(b.rating || 0) - Number(a.rating || 0))
    .slice(0, 5);

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
                  alt={category.title || category.name}
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
            <span className="text-[20px] text-[#737373]">Featured Products</span>
            <h2 className="text-[24px] font-bold text-[#252B42]">
              BESTSELLER PRODUCTS
            </h2>
            <p className="text-[14px] text-[#737373]">
              Problems trying to resolve the conflict between
            </p>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:gap-7.5">
            {products.map((product) => (
              <div
                key={product.id}
                className="w-full md:w-[calc(50%-15px)] lg:w-[calc(25%-24px)]"
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#23856D]">
        <div className="mx-auto flex w-full max-w-330 flex-col items-center gap-8 px-4 py-12 text-white md:flex-row md:px-6 xl:px-8">
          <div className="flex w-full flex-col gap-4 md:w-1/2">
            <span className="text-[16px] font-bold tracking-[0.1px]">
              SUMMER 2020
            </span>
            <h2 className="text-[40px] font-bold leading-[50px]">
              Vita Classic Product
            </h2>
            <p className="max-w-[300px] text-[14px] leading-6 text-white/90">
              We know how large objects will act, We know how are objects will act,
              We know
            </p>

            <div className="flex items-center gap-4">
              <span className="text-[24px] font-bold">$16.48</span>
              <button className="bg-[#2DC071] px-8 py-3 text-[14px] font-bold text-white">
                ADD TO CART
              </button>
            </div>
          </div>

          <div className="flex w-full justify-center md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80"
              alt="Vita product"
              className="h-[300px] w-full object-cover md:h-[400px]"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-330 flex-col gap-8 px-4 py-12 md:flex-row md:items-center md:px-6 xl:px-8">
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80"
              alt="Promo"
              className="h-[300px] w-full object-cover md:h-[400px]"
            />
          </div>

          <div className="flex w-full flex-col gap-4 md:w-1/2">
            <span className="text-[16px] font-bold text-[#BDBDBD]">
              SUMMER 2020
            </span>
            <h2 className="max-w-[320px] text-[40px] font-bold leading-[50px] text-[#252B42]">
              Part of the Neural Universe
            </h2>
            <p className="max-w-[320px] text-[14px] leading-6 text-[#737373]">
              We know how large objects will act, but things on a small scale.
            </p>

            <div className="flex gap-3">
              <button className="bg-[#2DC071] px-8 py-3 text-[14px] font-bold text-white">
                BUY NOW
              </button>
              <button className="border border-[#2DC071] px-8 py-3 text-[14px] font-bold text-[#2DC071]">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      <FeaturedPosts />
    </div>
  );
}

export default HomePage;