import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Typewriter } from 'react-simple-typewriter'


const Slider = () => {
  return (
    <>
      <section>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper rounded-xl w-[90%] lg:h-[560px] mb-4"
        >
          <SwiperSlide>
            <div className="">
              <img src="/slider1.jpg" alt="" />
              <span className="absolute left-9 bottom-12 font-bold text-white lg:text-5xl text-xl bg-gradient-to-r from-gray-950 via-gray-950 to-gray-950 bg-clip-text filter drop-shadow-lg"><Typewriter words={['Arches National Park, Utah']} loop={0} typeSpeed={30} delaySpeed={500} /></span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="/slider2.webp" alt="" />
              <span className="absolute left-9 bottom-12  font-bold text-white lg:text-5xl text-xl bg-gradient-to-r from-gray-950 via-gray-950 to-gray-950 bg-clip-text filter drop-shadow-lg"><Typewriter words={['Disneyland, California']} loop={0} typeSpeed={30} delaySpeed={500} /></span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="/slider3.jpg" alt="" />
              <span className="absolute left-9 bottom-12  font-bold text-white lg:text-5xl text-xl bg-gradient-to-r from-gray-950 via-gray-950 to-gray-950 bg-clip-text filter drop-shadow-lg"><Typewriter words={['Lassen Volcanic National Park']} loop={0} typeSpeed={30} delaySpeed={500} /></span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="/slider4.jpg" alt="" />
              <span className="absolute left-9 bottom-12  font-bold text-white lg:text-5xl text-xl bg-gradient-to-r from-gray-950 via-gray-950 to-gray-950 bg-clip-text filter drop-shadow-lg"><Typewriter words={['Monument Valley, Arizona ']} loop={0} typeSpeed={30} delaySpeed={500} /></span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="/slider5.jpg" alt="" />
              <span className="absolute left-9 bottom-12  font-bold text-white lg:text-5xl text-xl bg-gradient-to-r from-gray-950 via-gray-950 to-gray-950 bg-clip-text filter drop-shadow-lg"><Typewriter words={['Times Square, New York']} loop={0} typeSpeed={30} delaySpeed={500} /></span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="/slider6.jpg" alt="" />
              <span className="absolute left-9 bottom-12  font-bold text-white lg:text-5xl text-xl bg-gradient-to-r from-gray-950 via-gray-950 to-gray-950 bg-clip-text filter drop-shadow-lg"><Typewriter words={['360 Chicago Observation Deck, Illinois']} loop={0} typeSpeed={30} delaySpeed={500} /></span>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </section>
    </>
  );
};

export default Slider;
