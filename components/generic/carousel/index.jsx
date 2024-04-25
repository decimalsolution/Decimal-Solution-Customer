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
    <div className="relative h-[200px] w-full max-w-[1750px] px-8 sm:h-[240px] md:h-[260px] lg:h-[300px] xl:h-[340px] 2xl:h-[380px]">
      <button
        aria-label="Previous carousel slide"
        onClick={goPrev}
        className="absolute left-4 top-1/2 z-10 grid h-8 w-8 -translate-y-1/2 transform place-items-center rounded-full  bg-primary text-white lg:left-0 2xl:h-16 2xl:w-16"
      >
        <ArrowLeft strokeWidth={3} className="h-3/4 w-3/4" />
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
        aria-label="Next carousel slide"
        className="absolute right-4  top-1/2 z-10 grid h-8 w-8 -translate-y-1/2 transform place-items-center rounded-full bg-primary text-white lg:right-0 2xl:h-16 2xl:w-16"
      >
        <ArrowRight strokeWidth={3} className="h-3/4 w-3/4" />
      </button>
    </div>
  );
}
