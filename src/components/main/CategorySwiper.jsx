import { useContext, useState } from "react";
import { DATA } from "../../context/DataContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function CategorySwiper({ title, categoryName }) {
  const { gifts } = useContext(DATA);

    const [isFirstSlide, setIsFirstSlide] = useState(true);
    const filteredGifts =
      gifts?.find((item) => item.name === categoryName)?.eGifts || [];
    const showNavigation = filteredGifts.length > 4;
  return (
    <div className={`${categoryName.toLowerCase()} mt-10`}>
    <h2 className="px-4 font-bold tracking-widest uppercase text-[13px] md:text-[16px] md:pl-[110px] mb-[20px]">
      {title}
    </h2>
    <div
      className={`relative gradient flex items-center mt-5 transition-pl duration-500 ease-out ${
        isFirstSlide ? "md:!pl-[90px]" : "md:!pl-[0px]"
      }`}
    >
      <Swiper
        className={`!pl-4 ${isFirstSlide ? "md:!pl-[16px]" : "md:!pl-[0]"}`}
        cssMode
        spaceBetween={20}
        slidesPerView={2}
        slidesPerGroup={2}
        breakpoints={{
          480: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 35,
          },
        }}
        navigation={
          showNavigation
            ? {
                nextEl: `.swiper-button-next.swiper-next-1`,
                prevEl: `.swiper-button-prev.swiper-prev-1`,
              }
            : false
        }
        modules={[Navigation]}
        onInit={(swiper) => {
          const prevButton = document.querySelector(
            `.swiper-button-prev.swiper-prev-1`
          );
          if (prevButton && swiper.isBeginning) {
            prevButton.classList.add(`swiper-prev-1-disabled`);
          }
        }}
        onSlideChange={(swiper) => {
          const prevButton = document.querySelector(
            `.swiper-button-prev.swiper-prev-1`
          );
          const nextButton = document.querySelector(
            `.swiper-button-next.swiper-next-1`
          );

          if (prevButton) {
            if (swiper.activeIndex === 0)
              prevButton.classList.add(`swiper-prev-1-disabled`);
            else prevButton.classList.remove(`swiper-prev-1-disabled`);
          }

          if (nextButton) {
            if (swiper.isEnd)
              nextButton.classList.add(`swiper-next-1-disabled`);
            else nextButton.classList.remove(`swiper-next-1-disabled`);
          }
          setIsFirstSlide(swiper.activeIndex === 0);
        }}
      >
        {filteredGifts.map((gift, index) => (
          <SwiperSlide
            key={gift.productNumber || index}
            className="lg:!w-[20%] x480:!w-[30%] flex justify-center items-center 
            overflow-hidden rounded-lg shadow-[0px_4px_10px_rgba(0,0,0,0.2)] transform 
            transition duration-300"
          >
            <img
              className="object-cover rounded-sm"
              src={gift.largeImageUrl}
              alt={gift.altText || "Gift image"}
            />
          </SwiperSlide>
        ))}

        {showNavigation && (
          <>
            <div className={`swiper-button-prev swiper-prev-1`} />
            <div className={`swiper-button-next swiper-next-1`} />
          </>
        )}
      </Swiper>
    </div>
  </div>
  )
}

export default CategorySwiper