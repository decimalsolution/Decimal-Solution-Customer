import { useCallback, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./styles.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Carousel({ children, ...props }) {
  const [swiperRef, setSwiperRef] = useState(null);

  const goNext = useCallback(() => {
    if (swiperRef !== null) {
      swiperRef.slideNext();
    }
  }, [swiperRef]);

  const goPrev = useCallback(() => {
    if (swiperRef !== null) {
      swiperRef.slidePrev();
    }
  }, [swiperRef]);

  return (
    <div className="h-[200px] sm:h-[240px] md:h-[260px] lg:h-[300px] xl:h-[340px] 2xl:h-[380px] w-full max-w-[1750px] relative px-8">
      <button
        onClick={goPrev}
        className="absolute top-1/2 left-4 lg:left-0 z-10 transform -translate-y-1/2 bg-primary text-white w-8 h-8  2xl:w-16 2xl:h-16 grid place-items-center rounded-full"
      >
        <ArrowLeft strokeWidth={3} className="w-3/4 h-3/4" />
      </button>
      <Swiper
        spaceBetween={30}
        onSwiper={(swiper) => setSwiperRef(swiper)}
        navigation
        loop
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
        }}
        // slidesPerView={"auto"}
        {...props}
      >
        {children}
      </Swiper>
      <button
        onClick={goNext}
        className="absolute top-1/2  right-4 lg:right-0 z-10 transform -translate-y-1/2 bg-primary text-white w-8 h-8 2xl:w-16 2xl:h-16 grid place-items-center rounded-full"
      >
        <ArrowRight strokeWidth={3} className="w-3/4 h-3/4" />
      </button>
    </div>
  );
}
