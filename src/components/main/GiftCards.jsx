import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
function GiftCards() {
  return (
    <main>
      <h1 className="px-4 mt-5 font-bold text-[28px]">Gift Cards</h1>
      <h2 className="px-4 mt-5 font-bold tracking-widest uppercase text-[13px]">
        Featured
      </h2>

      <div className="">
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          navigation={{
            nextEl: ".swiper-button-next.swiper-next-1", // Özel sınıf
          prevEl: ".swiper-button-prev.swiper-prev-1", // Özel sınıf
          }}
          modules={[Navigation]}
          className="mySwiper flex justify-center items-center mt-10 !h-[100px]"
        >
          <SwiperSlide>
            <img
              className="object-contain w-full"
              src="/assets/gift.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-contain w-full"
              src="/assets/gift.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-contain w-full"
              src="/assets/gift.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-contain w-full"
              src="/assets/gift.png"
              alt=""
            />
          </SwiperSlide>
       
          <div className="swiper-button-prev swiper-prev-1" />
          <div className="swiper-button-next swiper-next-1" />
        </Swiper>
      </div>
    </main>
  );
}

export default GiftCards;
