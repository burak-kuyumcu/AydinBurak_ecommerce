import { useParams } from 'react-router-dom';
import { ChevronRight, Heart, ShoppingCart, Eye } from 'lucide-react';
import ProductCard from '../components/ProductCard';

function ProductDetailPage() {
  const { id } = useParams();

  const relatedProducts = [
    {
      id: 101,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 102,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 103,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1464306076886-da185f6a9d05?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 104,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 105,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 106,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 107,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 108,
      title: 'Graphic Design',
      department: 'English Department',
      oldPrice: '16.48',
      price: '6.48',
      image:
        'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="flex w-full flex-col bg-[#FAFAFA]">
  
      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-330 items-center gap-2 px-4 py-6 md:px-6 xl:px-8">
          <span className="text-[14px] font-bold text-[#252B42]">Home</span>
          <ChevronRight size={16} className="text-[#BDBDBD]" />
          <span className="text-[14px] font-bold text-[#737373]">Shop</span>
        </div>
      </section>

   
      <section className="w-full bg-[#FAFAFA]">
        <div className="mx-auto flex w-full max-w-330 flex-col gap-8 px-4 py-8 md:px-6 md:py-12 lg:flex-row xl:px-8">
          <div className="flex w-full flex-col gap-4 lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80"
              alt="Floating Phone"
              className="h-[300px] w-full object-cover md:h-[450px]"
            />

            <div className="flex gap-4">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=400&q=80"
                alt="thumb 1"
                className="h-20 w-20 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=400&q=80"
                alt="thumb 2"
                className="h-20 w-20 object-cover"
              />
            </div>
          </div>

          <div className="flex w-full flex-col gap-6 lg:w-1/2">
            <div className="flex flex-col gap-3">
              <h1 className="text-[20px] text-[#252B42]">Floating Phone</h1>

              <div className="flex items-center gap-2">
                <span className="text-[#F3CD03]">★★★★★</span>
                <span className="text-[14px] font-bold text-[#737373]">
                  10 Reviews
                </span>
              </div>

              <span className="text-[24px] font-bold text-[#252B42]">
                $1,139.33
              </span>

              <p className="text-[14px] text-[#737373]">
                Availability : <span className="font-bold text-[#23A6F0]">In Stock</span>
              </p>

              <p className="max-w-[450px] text-[14px] leading-5 text-[#858585]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                RELIT official consequent door ENIM RELIT Mollie. Excitation veniam
                consequent sent nostrud amet.
              </p>
            </div>

            <div className="h-px w-full bg-[#BDBDBD]" />

            <div className="flex gap-2">
              <span className="h-8 w-8 rounded-full bg-[#23A6F0]" />
              <span className="h-8 w-8 rounded-full bg-[#2DC071]" />
              <span className="h-8 w-8 rounded-full bg-[#E77C40]" />
              <span className="h-8 w-8 rounded-full bg-[#252B42]" />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button className="bg-[#23A6F0] px-6 py-3 text-[14px] font-bold text-white">
                Select Options
              </button>

              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8E8E8] bg-white">
                <Heart size={18} />
              </button>

              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8E8E8] bg-white">
                <ShoppingCart size={18} />
              </button>

              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8E8E8] bg-white">
                <Eye size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-330 flex-col gap-8 px-4 py-8 md:px-6 md:py-12 xl:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 border-b border-[#ECECEC] pb-6 text-center">
            <span className="text-[14px] font-semibold text-[#737373]">Description</span>
            <span className="text-[14px] font-semibold text-[#737373]">Additional Information</span>
            <span className="text-[14px] font-semibold text-[#737373]">
              Reviews <span className="text-[#23856D]">(0)</span>
            </span>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="w-full lg:w-[35%]">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
                alt="description"
                className="h-[300px] w-full object-cover"
              />
            </div>

            <div className="flex w-full flex-col gap-4 lg:w-[32.5%]">
              <h3 className="text-[24px] font-bold text-[#252B42]">
                the quick fox jumps over
              </h3>
              <p className="text-[14px] leading-5 text-[#737373]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                RELIT official consequent door ENIM RELIT Mollie. Excitation veniam
                consequent sent nostrud amet.
              </p>
              <p className="text-[14px] leading-5 text-[#737373]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                RELIT official consequent door ENIM RELIT Mollie. Excitation veniam
                consequent sent nostrud amet.
              </p>
              <p className="text-[14px] leading-5 text-[#737373]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                RELIT official consequent door ENIM RELIT Mollie. Excitation veniam
                consequent sent nostrud amet.
              </p>
            </div>

            <div className="flex w-full flex-col gap-6 lg:w-[32.5%]">
              <div className="flex flex-col gap-4">
                <h3 className="text-[24px] font-bold text-[#252B42]">
                  the quick fox jumps over
                </h3>
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-3 text-[14px] font-bold text-[#737373]">
                    <ChevronRight size={16} className="text-[#BDBDBD]" />
                    <span>the quick fox jumps over the lazy dog</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-[24px] font-bold text-[#252B42]">
                  the quick fox jumps over
                </h3>
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-3 text-[14px] font-bold text-[#737373]">
                    <ChevronRight size={16} className="text-[#BDBDBD]" />
                    <span>the quick fox jumps over the lazy dog</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FAFAFA]">
        <div className="mx-auto flex w-full max-w-330 flex-col gap-8 px-4 py-8 md:px-6 md:py-12 xl:px-8">
          <h2 className="text-[24px] font-bold text-[#252B42]">
            BESTSELLER PRODUCTS
          </h2>

          <div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:gap-7.5">
            {relatedProducts.map((product) => (
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
    </div>
  );
}

export default ProductDetailPage;