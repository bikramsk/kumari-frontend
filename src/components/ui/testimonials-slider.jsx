"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Link from "next/link";

const Carousel = ({ cards = [], slidesPerView = 1 }) => {
  if (!Array.isArray(cards) || cards.length === 0) {
    return <div>No cards</div>;
  }

  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        navigation
        loop={true}
        modules={[Navigation, Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          720: {
            slidesPerView: slidesPerView,
          },
          1024: {
            slidesPerView: slidesPerView,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        touchEventsTarget="container" // Ensure touch events are captured
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="overflow-hidden bg-gray-50 relative group">
              <div className="flex flex-col">
                {card.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Product Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                ))}
                <div>
                  {card.url && (
                    <Link href={card.url}>
                      <p className="text-xl tracking-wide uppercase font-semibold text-gray-900 dark:text-white">
                        {card.name}
                      </p>
                    </Link>
                  )}
                  <p className="text-md text-gray-500 dark:text-gray-400">
                    {card.date}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {card.role}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;