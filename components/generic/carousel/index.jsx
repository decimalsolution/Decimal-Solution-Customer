import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./styles.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Carousel({ children }) {
  const [swiperRef, setSwiperRef] = useState(null);

  const goNext = () => {
    if (swiperRef !== null) {
      swiperRef.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef !== null) {
      swiperRef.slidePrev();
    }
  };
  return (
    <div className="h-[380px] w-full max-w-[1750px] relative px-8">
      <button
        onClick={goPrev}
        className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2 bg-primary text-white w-16 h-16 grid place-items-center rounded-full"
      >
        <ArrowLeft size={40} strokeWidth={3} />
      </button>
      <Swiper
        spaceBetween={30}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => setSwiperRef(swiper)}
        navigation
        loop
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          900: {
            slidesPerView: 2,
          },

          1536: {
            slidesPerView: 3,
          },
        }}
      >
        {children}
      </Swiper>
      <button
        onClick={goNext}
        className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2 bg-primary text-white w-16 h-16 grid place-items-center rounded-full"
      >
        <ArrowRight size={40} strokeWidth={3} />
      </button>
    </div>
  );
}
