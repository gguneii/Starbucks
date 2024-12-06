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
          slidesPerView={2}
          slidesPerGroup={2}
          spaceBetween={30}
          breakpoints={{
            // 640px'den büyük ekranlar
            480: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            // 1024px'den büyük ekranlar
            768: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            // 1440px'den büyük ekranlar
            1440: {
              slidesPerView: 5,
              slidesPerGroup: 5,
            },
          }}
          navigation={{
            nextEl: ".swiper-button-next.swiper-next-1", 
            prevEl: ".swiper-button-prev.swiper-prev-1", 
          }}
          modules={[Navigation]}
          className="mySwiper flex justify-center items-center mt-5"
        >
          <SwiperSlide className="!w-[43%] !h-full flex justify-center items-center overflow-hidden rounded-lg shadow-[0px_4px_10px_rgba(0,0,0,0.2)] transform hover:translate-y-[-10px] transition duration-300">
            <img
              className=" w-full h-full rounded-lg "
              src="/assets/gift.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[43%]">
            <img
              className="object-contain w-full rounded-lg"
              src="/assets/gift.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[40%]">
            <img
              className="object-contain w-full rounded-lg"
              src="/assets/gift.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[40%]">
            <img
              className="object-contain w-full rounded-lg"
              src="/assets/gift.png"
              alt=""
            />
          </SwiperSlide>
          

          <div className="swiper-button-prev swiper-prev-1" />
          <div className="swiper-button-next swiper-next-1" />
        </Swiper>

        <div className="px-4 mt-8">
          <div className="flex items-center justify-center bg-[#edebe9] p-4 rounded-lg">
            <img src="/assets/group-gift-cards.webp" alt="" width="58.66px" loading="lazy" />
            <p className="text-[13px] font-medium px-4">Effortlessly send up to 10 eGifts per purchase. Select a design to start!</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default GiftCards;
