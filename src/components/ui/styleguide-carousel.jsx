"use client";
import React from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Heart } from "lucide-react";

const Carousel = ({ cards = [], slidesPerView }) => {
  
  if (!Array.isArray(cards) || cards.length === 0) {
    return <div>No cards</div>; 
  }

  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        modules={[Navigation, Autoplay]}
        breakpoints={{
          320: { 
            slidesPerView: 1, 
          },
          720: {
            slidesPerView: slidesPerView || 1, // Use the passed slidesPerView prop
          },
          1024: {
            slidesPerView: slidesPerView || 1, 
          },
        }}
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

                <div className="p-4 h-40">
                  <h2 className="text-xl font-semibold text-center">
                    Product Name
                  </h2>
                  <p className="text-center text-black mt-6">Rupees</p>

                  <div className="flex flex-row items-center justify-center mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="mr-1">Customize</span>
                    <div className="border-l border-gray-400 h-6 mx-1"></div>
                    <span className="ml-1 text-sm">
                      <Heart size={15} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="absolute top-1/2 left-0">
          <button className="swiper-button-prev">
           {/* <ChevronLeftIcon />  */}
          </button>
        </div>
        <div className="absolute top-1/2 right-0 ">
          <button className="swiper-button-next">
         {/* <ChevronRightIcon />  */}
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;