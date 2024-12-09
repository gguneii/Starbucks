import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { useContext, useState } from "react";
import { DATA } from "../../context/DataContext";
import { Helmet } from "react-helmet";
const CategorySwiper = ({
  title,
  categoryName,
  gifts
}) => {

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
            showNavigation ? {
                nextEl: `.swiper-button-next.swiper-next-1`,
                prevEl: `.swiper-button-prev.swiper-prev-1`,
              }
               : 
               false
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
              hover:translate-y-[-10px] transition duration-300"
            >
              <img
                className="object-cover rounded-sm"
                src={gift.largeImageUrl}
                alt={gift.altText || "Gift image"}
              />
            </SwiperSlide>
          ))}

          {
            showNavigation && (
              <>
              <div className={`swiper-button-prev swiper-prev-1`} />
              <div className={`swiper-button-next swiper-next-1`} />
              </>
            )
          }
        </Swiper>
      </div>
    </div>
  );
};
function GiftCards() {
  const { gifts } = useContext(DATA);
  // console.log(gifts);

  return (
    <>
      <Helmet>
        <title>Starbucks Gift Cards: Starbucks Coffe Company</title>
      </Helmet>
      <main className="">
        <div className="md:!pl-[90px]">
          <h1 className="px-4 mt-5 font-bold text-[28px] md:text-[35px] md:font-soDoSans md:mt-10">
            Gift Cards
          </h1>
        </div>

        {/* <div
          className={`relative gradient flex items-center transition-pl duration-500 ease-out ${
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
            navigation={{
              nextEl: ".swiper-button-next.swiper-next-1",
              prevEl: ".swiper-button-prev.swiper-prev-1",
            }}
            modules={[Navigation]}
            onInit={(swiper) => {
              const prevButton = document.querySelector(
                ".swiper-button-prev.swiper-prev-1"
              );
              if (prevButton && swiper.isBeginning) {
                prevButton.classList.add("swiper-prev-1-disabled");
              }
            }}
            onSlideChange={(swiper) => {
              const prevButton = document.querySelector(
                ".swiper-button-prev.swiper-prev-1"
              );
              const nextButton = document.querySelector(
                ".swiper-button-next.swiper-next-1"
              );

              // Əgər birinci slayddayıqsa prev gizlənsin
              if (prevButton) {
                if (swiper.activeIndex === 0)
                  prevButton.classList.add("swiper-prev-1-disabled");
                else prevButton.classList.remove("swiper-prev-1-disabled");
              }

              // Əgər sonuncu slayddayıqsa next gizlənsin
              if (nextButton) {
                if (swiper.isEnd)
                  nextButton.classList.add("swiper-next-1-disabled");
                else nextButton.classList.remove("swiper-next-1-disabled");
              }
              setIsFirstSlide(swiper.activeIndex === 0);
            }}
          >
            {gifts &&
              gifts.map((item, i) => {
                if (item.name === "Featured") {
                  return item?.eGifts?.map((gift, index) => (
                    <SwiperSlide
                      key={gift.productNumber || index}
                      className="lg:!w-[20%] x480:!w-[30%] flex justify-center
              items-center overflow-hidden rounded-lg shadow-[0px_4px_10px_rgba(0,0,0,0.2)] 
              transform hover:translate-y-[-10px] transition duration-300"
                    >
                      <img
                        className="object-cover rounded-sm"
                        src={gift.largeImageUrl}
                        alt={gift.altText || "Gift image"}
                      />
                    </SwiperSlide>
                  ));
                }
                return null;
              })}

            <div className="swiper-button-prev swiper-prev-1" />
            <div className="swiper-button-next swiper-next-1" />
          </Swiper>
        </div> */}

        <CategorySwiper
          title="Featured"
          categoryName="Featured"
          gifts={gifts}
        />

        <div className="px-4 mt-8 md:pl-[100px]">
          <div className="flex items-center justify-center bg-[#edebe9] p-4 rounded-lg md:justify-start">
            <img
              src="/assets/group-gift-cards.webp"
              alt=""
              width="58.66px"
              loading="lazy"
            />
            <p className="text-[13px] font-medium px-4 md:text-[16px]">
              Effortlessly send up to 10 eGifts per purchase. Select a design to
              start!
            </p>
          </div>
        </div>

        <div className="bg-[#d4e9e2] mt-5 px-4">
          <div className="md:px-[90px] lg:flex items-center lg:py-10">
            <h2 className="font-semibold text-[18px] pt-6 md:text-[24px] lg:pt-0 lg:text-[25px]">
              Received a gift card?
            </h2>
            <div className="md:flex items-center pt-[10px] pb-[30px] lg:pb-0 lg:pt-0 lg:px-5">
              <p className="text-[#00000094] md:text-[20px]">
                Earns 2<span>★ </span>
                per $1
              </p>
              <div className="py-5 md:py-0 md:px-5 lg:py-0">
                <a
                  className="border inline-block md:font-bold min-w-[35px] min-h-[35px] border-black px-[16px] py-[7px] rounded-full"
                  href=""
                >
                  Add or Reload
                </a>
                <a
                  className="border inline-block md:font-bold min-w-[35px] min-h-[35px] border-black text-white bg-black ml-5 px-[16px] py-[7px]  rounded-full"
                  href=""
                >
                  Check balance
                </a>
              </div>
            </div>
          </div>
        </div>

        <CategorySwiper
          title="Holiday"
          categoryName="Holiday"
          gifts={gifts}
        />

        <CategorySwiper
          title="Red Cup"
          categoryName="Red Cup"
          gifts={gifts}

        />
        <CategorySwiper
          title="Birthday"
          categoryName="Birthday"
          gifts={gifts}
        />
        <CategorySwiper
          title="Thank You"
          categoryName="Thank You"
          gifts={gifts}
        />
        <CategorySwiper
          title="Celebration"
          categoryName="Celebration"
          gifts={gifts}
        />
        <CategorySwiper
          title="Thanksgiving | 11/28"
          categoryName="Thanksgiving | 11/28"
          gifts={gifts}
        />
        <CategorySwiper
          title="Appreciation"
          categoryName="Appreciation"
          gifts={gifts}
        />
        <CategorySwiper
          title="Wicked"
          categoryName="Wicked"
          gifts={gifts}
        />
        <CategorySwiper
          title="Encouragement"
          categoryName="Encouragement"
          gifts={gifts}
        />
        <CategorySwiper
          title="Affection"
          categoryName="Affection"
          gifts={gifts}
        />
        <CategorySwiper
          title="Workplace"
          categoryName="Workplace"
          gifts={gifts}
        />
        <CategorySwiper
          title="Anytime"
          categoryName="Anytime"
          gifts={gifts}
        />
      </main>
    </>
  );
}

export default GiftCards;
