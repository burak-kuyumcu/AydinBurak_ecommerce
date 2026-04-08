import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import {
  fetchCategoriesIfNeeded,
  fetchProducts,
  setFilter,
  setSort,
  setOffset,
} from '../store/actions/productActions';

function ShopPage() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.product.categories);
  const products = useSelector((state) => state.product.productList);
  const total = useSelector((state) => state.product.total);
  const fetchState = useSelector((state) => state.product.fetchState);
  const selectedSort = useSelector((state) => state.product.sort);
  const selectedFilter = useSelector((state) => state.product.filter);
  const limit = useSelector((state) => state.product.limit);
  const offset = useSelector((state) => state.product.offset);

  const { gender, categoryName, categoryId } = useParams();

  const [filterInput, setFilterInput] = useState(selectedFilter || '');

  useEffect(() => {
    dispatch(fetchCategoriesIfNeeded());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setOffset(0));
    dispatch(
      fetchProducts({
        category: categoryId || undefined,
        offset: 0,
      })
    );
  }, [dispatch, categoryId]);

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

  const handleSortChange = (event) => {
    dispatch(setSort(event.target.value));
  };

  const handleFilterClick = () => {
    dispatch(setOffset(0));
    dispatch(setFilter(filterInput));
    dispatch(
      fetchProducts({
        category: categoryId || undefined,
        sort: selectedSort,
        filter: filterInput,
        offset: 0,
      })
    );
  };

  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(total / limit);

  const handlePageChange = (pageNumber) => {
    const newOffset = (pageNumber - 1) * limit;

    dispatch(setOffset(newOffset));
    dispatch(
      fetchProducts({
        category: categoryId || undefined,
        sort: selectedSort,
        filter: selectedFilter,
        offset: newOffset,
      })
    );
  };

  const handleFirstPage = () => {
    handlePageChange(1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

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
            Showing all {total} results
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

          <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
            <select
              value={selectedSort}
              onChange={handleSortChange}
              className="h-10 border border-[#DDDDDD] bg-white px-3 text-[14px] text-[#737373]"
            >
              <option value="">Sort By</option>
              <option value="price:asc">price:asc</option>
              <option value="price:desc">price:desc</option>
              <option value="rating:asc">rating:asc</option>
              <option value="rating:desc">rating:desc</option>
            </select>

            <input
              type="text"
              value={filterInput}
              onChange={(event) => setFilterInput(event.target.value)}
              placeholder="Filter products"
              className="h-10 border border-[#DDDDDD] bg-white px-3 text-[14px] text-[#737373] outline-none"
            />

            <button
              onClick={handleFilterClick}
              className="h-10 bg-[#23A6F0] px-5 text-[14px] font-semibold text-white"
            >
              Filter
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-330 flex-col gap-8 px-4 py-8 md:px-6 md:py-10 xl:px-8">
        {fetchState === 'FETCHING' ? (
          <div className="flex min-h-[300px] items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#E6E6E6] border-t-[#23A6F0]" />
          </div>
        ) : (
          <div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:gap-7.5">
            {products.map((product) => (
              <div
                key={product.id}
                className="w-full md:w-[calc(50%-15px)] lg:w-[calc(25%-24px)]"
              >
                <ProductCard
                  id={product.id}
                  title={product.name || product.title}
                  department={product.category?.title || product.category || 'Category'}
                  oldPrice={product.price}
                  price={product.price}
                  image={
                    product.images?.[0]?.url ||
                    product.images?.[0] ||
                    product.image ||
                    'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80'
                  }
                />
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-center gap-0 py-2">
          <button
            onClick={handleFirstPage}
            disabled={currentPage === 1}
            className="border border-[#E9E9E9] bg-[#F3F3F3] px-4 py-2.5 text-[14px] text-[#BDBDBD] disabled:cursor-not-allowed disabled:opacity-60"
          >
            First
          </button>

          {Array.from({ length: Math.min(totalPages, 3) }, (_, index) => {
            let pageNumber = index + 1;

            if (currentPage > 2 && totalPages > 3) {
              pageNumber = currentPage - 1 + index;
              if (pageNumber > totalPages) {
                pageNumber = totalPages - (2 - index);
              }
            }

            return (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`border border-[#E9E9E9] px-3.5 py-2.5 text-[14px] ${
                  currentPage === pageNumber
                    ? 'bg-[#23A6F0] text-white'
                    : 'bg-white text-[#23A6F0]'
                }`}
              >
                {pageNumber}
              </button>
            );
          })}

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages || totalPages === 0}
            className="border border-[#E9E9E9] bg-white px-4 py-2.5 text-[14px] text-[#23A6F0] disabled:cursor-not-allowed disabled:opacity-60"
          >
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