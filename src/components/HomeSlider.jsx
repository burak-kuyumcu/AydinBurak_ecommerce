import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function HomeSlider() {
  const slides = [
    {
      id: 1,
      subtitle: 'SUMMER 2025',
      title: 'NEW COLLECTION',
      desc: 'We know how large objects will act, but things on a small screen still deserve sparkle.',
      image:
        'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 2,
      subtitle: 'BESTSELLERS',
      title: 'FRESH ARRIVALS',
      desc: 'A clean ecommerce layout with flexible responsive sections.',
      image:
        'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  return (
    <section className="w-full bg-[#F6F6F6]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="mx-auto flex min-h-[520px] max-w-[1440px] flex-col overflow-hidden md:min-h-[600px] md:flex-row">
              <div className="flex w-full flex-col justify-center gap-[24px] px-[24px] py-[48px] text-center md:w-1/2 md:px-[60px] md:py-[60px] md:text-left lg:px-[100px]">
                <span className="text-[16px] font-bold tracking-[0.1px] text-[#23A6F0]">
                  {slide.subtitle}
                </span>

                <h1 className="text-[40px] font-bold leading-[50px] tracking-[0.2px] text-[#252B42] md:text-[52px] md:leading-[62px] lg:text-[58px] lg:leading-[80px]">
                  {slide.title}
                </h1>

                <p className="max-w-[376px] text-[20px] leading-[30px] text-[#737373] md:max-w-[420px]">
                  {slide.desc}
                </p>

                <button className="w-fit self-center rounded-[5px] bg-[#2DC071] px-[40px] py-[15px] text-[24px] font-bold text-white md:self-start">
                  Shop Now
                </button>
              </div>

              <div className="h-[320px] w-full md:h-auto md:w-1/2">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HomeSlider;