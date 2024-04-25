import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <section className="">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper rounded-xl w-[90%] h-[560px] mb-4"
        >
          <SwiperSlide>
            <div className="">
              <img src="/public/slider1.jpg" alt="" />
              <span className="absolute left-9 bottom-12 font-bold text-white text-5xl bg-gradient-to-r from-gray-950 via-gray-950 to-gray-950 bg-clip-text filter drop-shadow-lg">Arches National Park, Utah</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="/public/slider2.webp" alt="" />
              <span className="absolute left-9 bottom-12  font-bold text-white text-5xl bg-gradient-to-r from-gray-950 via-gray-950 to-gray-950 bg-clip-text filter drop-shadow-lg">Disneyland, California</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="/public/slider3.jpg" alt="" />
              <span className="absolute left-9 bottom-12  font-bold text-white text-5xl bg-gradient-to-r from-gray-950 via-gray-950 to-gray-950 bg-clip-text filter drop-shadow-lg">Hawaii Volcanoes National Park, Hawaii</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="/public/slider4.jpg" alt="" />
              <span className="absolute left-9 bottom-12  font-bold text-white text-5xl bg-gradient-to-r from-gray-950 via-gray-950 to-gray-950 bg-clip-text filter drop-shadow-lg">Monument Valley, Arizona</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="/public/slider5.jpg" alt="" />
              <span className="absolute left-9 bottom-12  font-bold text-white text-5xl bg-gradient-to-r from-gray-950 via-gray-950 to-gray-950 bg-clip-text filter drop-shadow-lg">Times Square, New York</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="/public/slider6.jpg" alt="" />
              <span className="absolute left-9 bottom-12  font-bold text-white text-5xl bg-gradient-to-r from-gray-950 via-gray-950 to-gray-950 bg-clip-text filter drop-shadow-lg">360 Chicago Observation Deck, Illinois</span>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </section>
    </>
  );
};

export default Slider;
