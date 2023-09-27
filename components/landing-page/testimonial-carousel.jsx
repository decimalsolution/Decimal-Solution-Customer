"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./testimonial-carousel.css";

export default function TestimonialCarousel({ testimonials }) {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <div className="h-[500px] w-full">
      <Swiper
        navigation
        id="testimonial-carousel"
        modules={[Pagination]}
        pagination={pagination}
        slidesPerView={1}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="py-4">
            <div className="flex flex-col items-center">
              <div className="relative border-8 border-primary rounded-lg">
                <div className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] relative">
                  <Image
                    src={testimonial.image}
                    alt="testimonial"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="absolute -top-4 lg:-top-6 -left-4 lg:-left-6 w-8 h-8 lg:w-12 lg:h-12 bg-primary rounded-full grid place-items-center">
                  <div className="w-3 h-3 lg:w-5 lg:h-5 relative">
                    <Image
                      src="/icons/inverted-commas.png"
                      alt="inverted-commas"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <h5 className="text-lg 2xl:text-2xl font-semibold mt-4 lg:mt-8">
                {testimonial.name}
              </h5>
              <p className="text-center tet-base lg:text-xl text-primary font-medium lg:mt-2">
                {testimonial.designation}
              </p>

              <p className="text-center text-base md:text-lg lg:text-xl 2xl:text-2xl  mt-2 md:mt-4 lg:mt-8 max-w-7xl leading-relaxed">
                {testimonial.testimonial}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
