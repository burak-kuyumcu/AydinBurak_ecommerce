import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function VitaSlider() {
  const slides = [
    {
      id: 1,
      subtitle: 'SUMMER 2020',
      title: 'Vita Classic Product',
      description:
        'We know how large objects will act, We know how are objects will act, We know',
      price: '$16.48',
      image: '/vita-slide-1.png',
    },
    {
      id: 2,
      subtitle: 'SUMMER 2020',
      title: 'Vita Classic Product',
      description:
        'We know how large objects will act, We know how are objects will act, We know',
      price: '$16.48',
      image: '/vita-slide-2.png',
    },
  ];

  return (
    <section className="w-full bg-[#23856D]">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop
        style={{
          '--swiper-navigation-color': '#ffffff',
          '--swiper-pagination-color': '#ffffff',
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="mx-auto flex w-full max-w-330 flex-col items-center gap-8 px-4 py-12 text-white md:flex-row md:px-6 xl:px-8">
              <div className="flex w-full flex-col gap-4 md:w-1/2 md:pr-8">
                <span className="text-[16px] font-bold tracking-[0.1px]">
                  {slide.subtitle}
                </span>

                <h2 className="max-w-[420px] text-[40px] font-bold leading-[50px]">
                  {slide.title}
                </h2>

                <p className="max-w-[340px] text-[14px] leading-6 text-white/90">
                  {slide.description}
                </p>

                <div className="flex items-center gap-4">
                  <span className="text-[24px] font-bold">{slide.price}</span>
                  <button className="bg-[#2DC071] px-8 py-3 text-[14px] font-bold text-white">
                    ADD TO CART
                  </button>
                </div>
              </div>

              <div className="flex w-full justify-center md:w-1/2">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-[260px] w-full max-w-[420px] object-contain md:h-[360px]"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default VitaSlider;