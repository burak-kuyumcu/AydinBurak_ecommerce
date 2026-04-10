import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

function HomeHeroSlider() {
  const slides = [
    {
      id: 1,
      subtitle: 'SUMMER 2020',
      title: 'NEW COLLECTION',
      description:
        'We know how large objects will act, but things on a small screen.',
      image: '/HeroSlider.jpg',
    },
    {
      id: 2,
      subtitle: 'SUMMER 2020',
      title: 'FRESH STYLE',
      description:
        'A modern collection designed for mobile-first shopping experiences.',
      image:
        'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
    },
  ];

  return (
    <section className="w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full bg-[#23A6F0]">
              <div className="mx-auto flex w-full max-w-330 flex-col md:min-h-[500px] md:flex-row">
                <div className="flex w-full flex-col justify-center gap-6 px-6 py-12 text-white md:w-1/2 md:px-8 lg:px-10">
                  <span className="text-[16px] font-bold tracking-[0.1px]">
                    {slide.subtitle}
                  </span>

                  <h1 className="text-[40px] font-bold leading-[50px] tracking-[0.2px] md:text-[58px] md:leading-[80px]">
                    {slide.title}
                  </h1>

                  <p className="max-w-[280px] text-[14px] leading-6 text-white/90">
                    {slide.description}
                  </p>

                  <button className="w-fit bg-[#2DC071] px-10 py-3 text-[14px] font-bold text-white">
                    SHOP NOW
                  </button>
                </div>

                <div className="flex w-full items-end justify-center md:w-1/2">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-[320px] w-full object-contain md:h-[500px]"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HomeHeroSlider;