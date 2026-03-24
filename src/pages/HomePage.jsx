import ProductCard from '../components/ProductCard';

function HomePage() {
  const products = [
    {
      id: 1,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
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
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 7,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 8,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 9,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 10,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 11,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 12,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const shopCategories = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      image:
        'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="flex flex-col bg-[#FAFAFA]">
      <section className="w-full">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-[40px] px-[24px] py-[48px] lg:px-[100px]">
          <div className="flex flex-col gap-[12px] md:flex-row md:items-center md:justify-between">
            <h2 className="text-[24px] font-bold leading-[32px] tracking-[0.1px] text-[#252B42]">
              Shop
            </h2>

            <div className="flex items-center gap-[8px] text-[14px] font-semibold leading-[24px] tracking-[0.2px] text-[#737373]">
              <span className="text-[#252B42]">Home</span>
              <span>{'>'}</span>
              <span>Shop</span>
            </div>
          </div>

          <div className="flex flex-col gap-[16px] md:flex-row md:flex-wrap md:gap-[16px] lg:flex-nowrap">
            {shopCategories.map((item) => (
              <div
                key={item.id}
                className="relative w-full overflow-hidden md:w-[calc(50%-8px)] lg:w-[20%]"
              >
                <img
                  src={item.image}
                  alt="Shop category"
                  className="h-[300px] w-full object-cover md:h-[223px]"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/25">
                  <h3 className="text-[16px] font-bold leading-[24px] tracking-[0.1px] text-white">
                    CLOTHS
                  </h3>
                  <p className="text-[14px] font-normal leading-[24px] tracking-[0.2px] text-white">
                    5 Items
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-[20px] px-[24px] py-[24px] lg:flex-row lg:items-center lg:justify-between lg:px-[100px]">
          <span className="text-[14px] font-semibold text-[#737373]">
            Showing all 12 results
          </span>

          <div className="flex items-center gap-[15px]">
            <span className="text-[14px] text-[#737373]">Views:</span>

            <div className="flex items-center gap-[10px]">
              <div className="flex h-[32px] w-[32px] items-center justify-center border border-[#E6E6E6] text-[12px] text-[#252B42]">
                □
              </div>
              <div className="flex h-[32px] w-[32px] items-center justify-center border border-[#E6E6E6] text-[12px] text-[#252B42]">
                ≡
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[10px]">
            <select className="h-[40px] border border-[#DDDDDD] bg-white px-[12px] text-[14px] text-[#737373]">
              <option>Popularity</option>
              <option>Price</option>
            </select>

            <button className="h-[40px] bg-[#23A6F0] px-[20px] text-[14px] font-semibold text-white">
              Filter
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-[1440px] flex-col gap-[40px] px-[24px] py-[40px] lg:px-[100px]">
        <div className="flex flex-col gap-[20px] md:flex-row md:flex-wrap md:gap-[30px]">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full md:w-[calc(50%-15px)] lg:w-[calc(25%-23px)]"
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-[8px] py-[20px]">
          <button className="border border-[#E9E9E9] bg-[#F3F3F3] px-[16px] py-[10px] text-[14px] text-[#BDBDBD]">
            First
          </button>
          <button className="border border-[#E9E9E9] bg-white px-[14px] py-[10px] text-[14px] text-[#23A6F0]">
            1
          </button>
          <button className="border border-[#E9E9E9] bg-[#23A6F0] px-[14px] py-[10px] text-[14px] text-white">
            2
          </button>
          <button className="border border-[#E9E9E9] bg-white px-[14px] py-[10px] text-[14px] text-[#23A6F0]">
            3
          </button>
          <button className="border border-[#E9E9E9] bg-white px-[16px] py-[10px] text-[14px] text-[#23A6F0]">
            Next
          </button>
        </div>
      </section>

      <section className="w-full bg-[#FAFAFA]">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-[40px] px-[24px] py-[40px] lg:px-[100px]">
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

export default HomePage;