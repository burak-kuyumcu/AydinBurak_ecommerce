import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { fetchCategoriesIfNeeded } from '../store/actions/productActions';

function ShopPage() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.product.categories);
  const { gender, categoryName, categoryId } = useParams();

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
        'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 7,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 8,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 9,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 10,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 11,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 12,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const formatCategoryPath = (category) => {
    const genderValue = String(category.gender || '').toLowerCase();
    const genderText =
      genderValue === 'k' || genderValue === 'kadın' || genderValue === 'kadin'
        ? 'kadin'
        : 'erkek';

    const rawName = category.title || category.name || '';

    const normalizedCategoryName = rawName
      .toLowerCase()
      .replaceAll(' ', '-')
      .replaceAll('ı', 'i')
      .replaceAll('ş', 's')
      .replaceAll('ç', 'c')
      .replaceAll('ö', 'o')
      .replaceAll('ü', 'u')
      .replaceAll('ğ', 'g');

    return `/shop/${genderText}/${normalizedCategoryName}/${category.id}`;
  };

  const currentCategory = categories.find(
    (item) => String(item.id) === String(categoryId)
  );

  const pageTitle = currentCategory
    ? currentCategory.title || currentCategory.name
    : 'Shop';

  const breadcrumbGender =
    gender === 'kadin' ? 'Kadın' : gender === 'erkek' ? 'Erkek' : '';

  const topCategories = [...categories]
    .sort((a, b) => Number(b.rating || 0) - Number(a.rating || 0))
    .slice(0, 5);

  return (
    <div className="flex w-full flex-col bg-[#FAFAFA]">
      <section className="w-full">
        <div className="mx-auto flex w-full max-w-330 flex-col gap-10 px-4 py-8 md:px-6 md:py-12 xl:px-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <h2 className="text-center text-[24px] font-bold leading-8 tracking-[0.1px] text-[#252B42] md:text-left">
              {pageTitle}
            </h2>

            <div className="flex items-center justify-center gap-2 text-[14px] font-semibold leading-6 tracking-[0.2px] text-[#737373] md:justify-end">
              <Link to="/" className="text-[#252B42]">
                Home
              </Link>
              <span>{'>'}</span>
              <Link to="/shop" className="text-[#252B42]">
                Shop
              </Link>
              {breadcrumbGender && (
                <>
                  <span>{'>'}</span>
                  <span>{breadcrumbGender}</span>
                </>
              )}
              {categoryName && (
                <>
                  <span>{'>'}</span>
                  <span>{categoryName}</span>
                </>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-4 lg:flex-nowrap">
            {topCategories.map((category) => (
              <Link
                key={category.id}
                to={formatCategoryPath(category)}
                className="relative w-full overflow-hidden md:w-[calc(50%-8px)] lg:w-[20%]"
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

                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/25">
                  <h3 className="text-[16px] font-bold leading-6 tracking-[0.1px] text-white">
                    {category.title || category.name}
                  </h3>
                  <p className="text-[14px] leading-6 tracking-[0.2px] text-white">
                    Rating: {category.rating || 0}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-330 flex-col gap-4 px-4 py-6 md:px-6 lg:flex-row lg:items-center lg:justify-between xl:px-8">
          <span className="text-center text-[14px] font-semibold text-[#737373] lg:text-left">
            Showing all 12 results
          </span>

          <div className="flex items-center justify-center gap-4">
            <span className="text-[14px] text-[#737373]">Views:</span>

            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center border border-[#E6E6E6] text-[12px] text-[#252B42]">
                □
              </div>
              <div className="flex h-8 w-8 items-center justify-center border border-[#E6E6E6] text-[12px] text-[#252B42]">
                ≡
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <select className="h-10 border border-[#DDDDDD] bg-white px-3 text-[14px] text-[#737373]">
              <option>Popularity</option>
              <option>Price</option>
            </select>

            <button className="h-10 bg-[#23A6F0] px-5 text-[14px] font-semibold text-white">
              Filter
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-330 flex-col gap-8 px-4 py-8 md:px-6 md:py-10 xl:px-8">
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

        <div className="flex justify-center gap-0 py-2">
          <button className="border border-[#E9E9E9] bg-[#F3F3F3] px-4 py-2.5 text-[14px] text-[#BDBDBD]">
            First
          </button>
          <button className="border border-[#E9E9E9] bg-white px-3.5 py-2.5 text-[14px] text-[#23A6F0]">
            1
          </button>
          <button className="border border-[#E9E9E9] bg-[#23A6F0] px-3.5 py-2.5 text-[14px] text-white">
            2
          </button>
          <button className="border border-[#E9E9E9] bg-white px-3.5 py-2.5 text-[14px] text-[#23A6F0]">
            3
          </button>
          <button className="border border-[#E9E9E9] bg-white px-4 py-2.5 text-[14px] text-[#23A6F0]">
            Next
          </button>
        </div>
      </section>

      <section className="w-full bg-[#FAFAFA]">
        <div className="mx-auto flex w-full max-w-330 flex-col items-center justify-center gap-10 px-4 py-12 md:flex-row md:flex-wrap md:gap-10 md:px-6 xl:px-8">
          <span className="text-[32px] font-bold text-[#737373] opacity-60">
            hooli
          </span>
          <span className="text-[32px] font-bold text-[#737373] opacity-60">
            lyft
          </span>
          <span className="text-[32px] font-bold text-[#737373] opacity-60">
            stripe
          </span>
          <span className="text-[32px] font-bold text-[#737373] opacity-60">
            aws
          </span>
          <span className="text-[32px] font-bold text-[#737373] opacity-60">
            reddit
          </span>
        </div>
      </section>
    </div>
  );
}

export default ShopPage;