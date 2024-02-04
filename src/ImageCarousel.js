import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const ImageCarousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        clickable: true,
        type: "bullets", // You can choose the type of pagination here
      }}
    >
      <SwiperSlide>
        <a href="https://www.miniso.com/EN/Product?Node=500301200">
          <img src="/images/banner1.jpg" alt="" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="https://www.miniso.com/EN/Minifamily">
          <img src="/images/banner2.jpg" alt="" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="/EN/Shop/Store">
          <img src="/images/banner3.jpg" alt="" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="your-link-4">
          <img src="/images/banner4.jpg" alt="" />
        </a>
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageCarousel;
