import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
function Rewards() {
  const [activeIndex, setActive] = useState(25);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const handleButton = (index) => {
    setActive(index);
  };

  return (
    <main>
      <div className="bg-[#1e3932] text-white w-full sticky top-0">
        <div className="flex custom:px-[110px] lg:px-[40px]  justify-between items-center max-w-[1500px] mx-auto px-[1.6rem] h-[50px]">
          <h1 className="uppercase font-soDoSans text-[13px] tracking-[0.1em]">
            Starbucks® Rewards
          </h1>
          <a
            className="border whitespace-nowrap px-[16px] py-[4px] rounded-full font-semibold text-center inline-block md:hidden"
            href=""
          >
            Join in the app
          </a>
        </div>
      </div>

      <div className="w-full bg-[rgb(212_233_226)]">
        <div className="max-w-[1530px] mx-auto">
          <div className="bg-[rgb(212_233_226)] bg-[url('/assets/rewards.webp')] md:bg-[url('/assets/rewards2.webp')] md:bg-[50%] md:bg-[auto_100%] bg-cover bg-center bg-no-repeat w-full h-[800px] md:max-w-full md:flex items-center">
            <div className="max-w-[400px] mx-auto py-[2rem] text-center md:text-left md:max-w-full md:ml-10">
              <h2 className="font-semibold leading-[1.29] text-[1.4rem] x4:text-[1.8rem]  md:text-[2.8rem]">
                FREE COFFEE <br />
                IS A TAP AWAY
              </h2>
              <p className="pt-[1.6rem] font-medium text-[1rem] x4:text-[1.2rem]">
                Join now to start earning Rewards.
              </p>
              <div className="pt-[2rem]">
                <div>
                  <a
                    className="bg-[hsl(158_100%_23%)] text-white px-[16px] md:hidden py-[7px] font-semibold rounded-full"
                    href=""
                  >
                    Join in the app
                  </a>
                  <a
                    className="bg-[hsl(158_100%_23%)] hidden md:inline-block text-white px-[16px] py-[7px] font-semibold rounded-full"
                    href=""
                  >
                    Join now
                  </a>
                </div>

                <div className="pt-[1.6rem]">
                  <a className="underline md:hidden" href="">
                    Or join online
                  </a>
                  <p className="md:inline-block hidden font-normal text-[19px]">
                    Or
                    <span className="underline"> join in the app </span>
                    for the best experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto">
        <div className="pt-[2.4rem]">
          <div className="text-center w-full">
            <h2 className="text-[1.5rem] md:text-[2rem] font-semibold">
              Getting started is easy
            </h2>
            <p className="pt-[1rem] font-medium text-[14px] md:text-[16px]">
              Earn Stars and get rewarded in a few easy steps.
            </p>
          </div>

          <ol className="pt-[48px] max-w-[900px] xl:max-w-[1300px] mx-auto flex flex-col md:flex-row">
            <li className="flex md:flex-col md:justify-center md:items-center md:text-center px-[20px] mb-[2.5rem]">
              <div className="max-w-[128px] md:mb-[24px] pr-[1rem] flex-shrink-0 ">
                <img
                  className="w-[48px] max-w-full"
                  src="/assets/step1.webp"
                  alt=""
                />
              </div>
              <div>
                <h3 className="font-semibold md:hidden text-[1.1rem] md:text-[1.3rem]">
                  Download the Starbucks® app
                </h3>
                <h3 className="font-semibold hidden md:block text-[1.1rem] md:text-[1.4rem]">
                  Create an account
                </h3>
                <p className="pt-[1rem] text-[14px] md:hidden md:text-[16px] font-normal">
                  <a className="underline text-[#006241]">Join in the app </a>
                  to get access to the full range of Starbucks® Rewards
                  benefits. You can also
                  <a className="underline text-[#006241]" href="">
                    {" "}
                    join online
                  </a>
                </p>
                <p className="hidden md:block pt-[1rem] text-[14px] md:text-[16px] font-normal">
                  To get started,{" "}
                  <a className="underline text-[#006241]" href="">
                    join now
                  </a>
                  . You can also{" "}
                  <a className="underline text-[#006241]" href="">
                    Join in the app
                  </a>{" "}
                  to get access to the full range of Starbucks® Rewards
                  benefits.
                </p>
              </div>
            </li>
            <li className="flex md:flex-col md:justify-center md:items-center md:text-center px-[20px] pb-[2.5rem]">
              <div className="max-w-[128px] md:mb-[24px] pr-[1rem] flex-shrink-0 ">
                <img
                  className="w-[48px] max-w-full"
                  src="/assets/step2.webp"
                  alt=""
                />
              </div>
              <div>
                <h3 className="font-semibold text-[1.1rem] md:text-[1.4rem]">
                  Order and pay how you’d like
                </h3>
                <p className="pt-[1rem] text-[14px] md:text-[16px] font-normal">
                  Use cash, credit/debit card or save some time and pay right
                  through the app. You’ll collect Stars all ways.
                  <a className="underline text-[#006241]" href="">
                    {" "}
                    Learn how
                  </a>
                </p>
              </div>
            </li>

            <li className="flex md:flex-col md:justify-center md:items-center md:text-center px-[20px] pb-[2.5rem]">
              <div className="max-w-[128px] md:mb-[24px] pr-[1rem] flex-shrink-0 ">
                <img
                  className="w-[48px] max-w-full"
                  src="/assets/step3.webp"
                  alt=""
                />
              </div>
              <div>
                <h3 className="font-semibold text-[1.1rem] md:text-[1.4rem]">
                  Earn Stars, get Rewards
                </h3>
                <p className="pt-[1rem] text-[14px] md:text-[16px] font-normal">
                  As you earn Stars, you can redeem them for Rewards—like free
                  food, drinks, and more. Start redeeming with as little as 25
                  Stars!
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <div className="favorites">
        <div className="bg-[#d3e8e154] pt-[4rem]">
          <h2 className="text-center font-semibold pb-[1.6rem] text-[1.6rem]">
            Get your favorites for free
          </h2>
          <div className="">
            <div className="flex favorites md:max-w-[540px] mx-auto">
              {[25, 100, 200, 300, 400].map((value) => (
                <button
                  key={value}
                  className={`py-[10px] w-full transition-transform ease-in-out transform duration-700 ${
                    activeIndex === value ? "border-b-4 border-[#00754a]" : ""
                  }`}
                  onClick={() => handleButton(value)}
                >
                  <span className="text-[1.2rem] md:text-[1.5rem] md:tracking-wider font-semibold ">
                    {value}
                  </span>
                  <span className="text-[#cba258]">★</span>
                </button>
              ))}
            </div>
            <div className="content">
              {activeIndex === 25 && (
                <div className="w-full bg-[#d4e9e2] flex justify-center items-center">
                  <div className="max-w-[850px] w-full px-4">
                    <div className="flex flex-col md:flex-row justify-center items-center bg-[#d4e9e2] shadow-[inset_0_7px_9px_-7px_#00000024] transition duration-700">
                      <div className="py-[2rem]">
                        <img src="/assets/25.webp" alt="img25" />
                      </div>
                      <div className="text-center md:text-start px-[1rem] pb-[2.5rem]">
                        <h3 className="font-semibold text-[1.3rem] pb-[1rem] md:text-[1.5rem]">
                          Customize your drink
                        </h3>
                        <p className="font-normal tracking-wide text-[14px] md:text-[16px]">
                          Make your drink just right with an extra espresso shot
                          or a dash of your favorite syrup.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeIndex === 100 && (
                <div className="w-full  bg-[#d4e9e2] flex justify-center items-center">
                  <div className="max-w-[850px] w-full px-4">
                    <div className="img100 flex flex-col md:flex-row justify-center items-center bg-[#d4e9e2] shadow-[inset_0_7px_9px_-7px_#00000024] transition duration-700">
                      <div className="py-[2rem]">
                        <img src="/assets/100.webp" alt="img100" />
                      </div>
                      <div className="text-center md:text-start px-[1rem] pb-[2.5rem]">
                        <h3 className="font-semibold text-[1.3rem] pb-[1rem] md:text-[1.5rem]">
                          Brewed hot or iced coffee or tea, bakery item,
                          packaged snack and more
                        </h3>
                        <p className="font-normal tracking-wide text-[14px] md:text-[16px]">
                          Treat yourself to an iced coffee, buttery croissant,
                          bag of chips and more.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeIndex === 200 && (
                <div className="w-full bg-[#d4e9e2] flex justify-center items-center">
                  <div className="max-w-[850px] w-full px-4">
                    <div className="img200 flex flex-col md:flex-row justify-center items-center bg-[#d4e9e2] shadow-[inset_0_7px_9px_-7px_#00000024] transition duration-700">
                      <div className="py-[2rem]">
                        <img src="/assets/200.webp" alt="img200" />
                      </div>
                      <div className="text-center md:text-start px-[1rem] pb-[2.5rem]">
                        <h3 className="font-semibold text-[1.3rem] pb-[1rem] md:text-[1.5rem]">
                          Handcrafted drink (Cold Brew, lattes and more) or hot
                          breakfast
                        </h3>
                        <p className="font-normal tracking-wide text-[14px] md:text-[16px]">
                          Turn good mornings great with a delicious handcrafted
                          drink of your choice, breakfast sandwich or oatmeal on
                          us.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeIndex === 300 && (
                <div className="w-full bg-[#d4e9e2] flex justify-center items-center">
                  <div className="max-w-[850px] w-full px-4">
                    <div className="img300 flex flex-col md:flex-row justify-center items-center bg-[#d4e9e2] shadow-[inset_0_7px_9px_-7px_#00000024] transition duration-700">
                      <div className="py-[2rem]">
                        <img
                          src="/assets/300.webp"
                          alt="Sandwich, protein box or at-home coffee"
                        />
                      </div>
                      <div className="text-center md:text-start px-[1rem] pb-[2.5rem]">
                        <h3 className="font-semibold text-[1.3rem] pb-[1rem] md:text-[1.5rem]">
                          Sandwich, protein box or at-home coffee
                        </h3>
                        <p className="font-normal tracking-wide text-[14px] md:text-[16px]">
                          Enjoy a PM pick-me-up with a lunch sandwich, protein
                          box or a bag of coffee—including Starbucks VIA
                          Instant®.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeIndex === 400 && (
                <div className="w-full bg-[#d4e9e2] flex justify-center items-center">
                  <div className="max-w-[850px] w-full px-4">
                    <div className="img400 flex flex-col md:flex-row justify-center items-center bg-[#d4e9e2] shadow-[inset_0_7px_9px_-7px_#00000024] transition duration-700">
                      <div className="py-[2rem]">
                        <img
                          src="/assets/400.webp"
                          alt="Select Starbucks® merchandise"
                        />
                      </div>
                      <div className="text-center md:text-start px-[1rem] pb-[2.5rem]">
                        <h3 className="font-semibold text-[1.3rem] pb-[1rem] md:text-[1.6rem]">
                          Select Starbucks® merchandise
                        </h3>
                        <p className="font-normal tracking-wide text-[14px] md:text-[16px]">
                          Take home a signature cup, drink tumbler or your
                          choice of coffee merch up to $20.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto">
        <div className="pt-[2.4rem]">
          <div className="text-center w-full">
            <h2 className="text-[1.5rem] md:text-[2rem] font-semibold">
              Endless Extras
            </h2>
            <p className="pt-[1rem] max-w-[680px] mx-auto font-medium text-[14px] md:text-[16px]">
              Joining Starbucks® Rewards means unlocking access to benefits like
              quick and easy ordering, tasty Rewards and—yes, free coffee.
            </p>
          </div>

          <ol className="pt-[48px] max-w-[900px] xl:max-w-[1300px] mx-auto flex flex-col md:flex-row">
            <li className="flex md:flex-col md:justify-center md:items-center md:text-center px-[20px] mb-[2.5rem]">
              <div className="max-w-[128px] md:mb-[24px] pr-[1rem] flex-shrink-0 ">
                <img
                  className="w-[112px] max-w-full"
                  src="/assets/1-fun-freebies.webp"
                  alt="fun-freebies"
                />
              </div>
              <div>
                <h3 className="font-semibold text-[1.1rem] md:text-[1.3rem]">
                  Fun freebies
                </h3>
                <p className="pt-[1rem] text-[14px] md:text-[16px] font-normal">
                  Not only can you earn free coffee, look forward to a birthday
                  treat plus coffee and tea refills.
                </p>
                <a
                  onClick={() => setModal((mod) => !mod)}
                  className="underline cursor-pointer block pt-4 font-semibold text-[#006241]"
                >
                  Learn more{" "}
                </a>
              </div>
            </li>
            <li className="flex md:flex-col md:justify-center md:items-center md:text-center px-[20px] pb-[2.5rem]">
              <div className="max-w-[128px] md:mb-[24px] pr-[1rem] flex-shrink-0 ">
                <img
                  className="w-[112px] max-w-full"
                  src="/assets/2-order-and-pay-ahead.webp"
                  alt="order-and-pay-ahead"
                />
              </div>
              <div>
                <h3 className="font-semibold text-[1.1rem] md:text-[1.4rem]">
                  Order & pay ahead
                </h3>
                <p className="pt-[1rem] text-[14px] md:text-[16px] font-normal">
                  Master the art of ordering ahead with saved favorites and
                  payment methods.
                </p>
                <a
                  onClick={() => setModal2((mod) => !mod)}
                  className="underline cursor-pointer block font-semibold pt-4 text-[#006241]"
                >
                  Learn more{" "}
                </a>
              </div>
            </li>

            <li className="flex md:flex-col md:justify-center md:items-center md:text-center px-[20px] pb-[2.5rem]">
              <div className="max-w-[128px] md:mb-[24px] pr-[1rem] flex-shrink-0 ">
                <img
                  className="w-[112px] max-w-full"
                  src="/assets/3-get-to-free-faster.webp"
                  alt="get-to-free-faster"
                />
              </div>
              <div>
                <h3 className="font-semibold text-[1.1rem] md:text-[1.4rem]">
                  Get to free faster
                </h3>
                <p className="pt-[1rem] text-[14px] md:text-[16px] font-normal">
                  Earn Stars even quicker with Bonus Star challenges, Double
                  Star Days and exciting games.
                </p>
                <a
                  onClick={() => setModal3((mod) => !mod)}
                  className="underline cursor-pointer block font-semibold pt-4 text-[#006241]"
                >
                  Learn more{" "}
                </a>
              </div>
            </li>
          </ol>
        </div>
      </div>

      {modal && (
        <div
          onClick={() => setModal(false)}
          className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg shadow-lg w-full max-w-[400px] p-6 text-center"
          >
            <div onClick={() => setModal(false)} className="text-end">
              <span className="tracking-widest text-[20px] font-semibold cursor-pointer">
                X
              </span>
            </div>
            <Swiper
              style={{
                "--swiper-navigation-color": "#6b6b6b",
                "--swiper-navigation-size": "24px",
              }}
              cssMode={true}
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={{
                nextEl: ".swiper-button-next.swiper-next-2",
                prevEl: ".swiper-button-prev.swiper-prev-2",
              }}
              keyboard={true}
              modules={[Navigation, Pagination, Keyboard]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="mb-10">
                  <div className="w-full">
                    <img
                      className="object-cover"
                      src="./assets/1A.webp"
                      alt="1a"
                    />
                  </div>
                  <h1 className="text-[20px] font-semibold py-[10px]">
                    Free food, drinks & more
                  </h1>
                  <p className="text-[14px] font-medium tracking-wider pb-10">
                    Redeem your Stars for favorites like a handcrafted cold
                    brew, protein box or even a coffee tumbler
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mb-10">
                  <div className="w-full">
                    <img
                      className="object-cover"
                      src="./assets/1B.webp"
                      alt="1B"
                    />
                  </div>
                  <h1 className="text-[20px] font-semibold py-[10px]">
                    Complimentary birthday treat
                  </h1>
                  <p className="text-[14px] font-medium tracking-wider pb-10">
                    Every year on your birthday get a free drink or food item of
                    your choice.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mb-10">
                  <div className="w-full">
                    <img
                      className="object-cover"
                      src="./assets/1C.webp"
                      alt="1C"
                    />
                  </div>
                  <h1 className="text-[20px] font-semibold py-[10px]">
                    Brewed coffee & tea refills on us
                  </h1>
                  <p className="text-[14px] font-medium tracking-wider pb-10">
                    More Caffè Verona® Blend, please. We’re happy to refill your
                    hot cup while you’re in the store. Just ask.
                  </p>
                </div>
              </SwiperSlide>
                <div className="swiper-button-next swiper-next-2" />
                <div className="swiper-button-prev swiper-prev-2" />
            </Swiper>
          </div>
        </div>
      )}

      {modal2 && (
        <div
          onClick={() => setModal2(false)}
          className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg shadow-lg w-[90%] max-w-[400px] p-6 text-center"
          >
            <div onClick={() => setModal2(false)} className="text-end">
              <span className="tracking-widest text-[20px] font-semibold cursor-pointer">
                X
              </span>
            </div>
            <Swiper
              style={{
                "--swiper-navigation-color": "#6b6b6b",
                "--swiper-navigation-size": "24px",
              }}
              cssMode={true}
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={{
                nextEl: ".swiper-button-next.swiper-next-2",
                prevEl: ".swiper-button-prev.swiper-prev-2",
              }}
              keyboard={true}
              modules={[Navigation, Pagination, Keyboard]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="mb-10">
                  <div className="w-full">
                    <img
                      className="object-cover"
                      src="./assets/2A.webp"
                      alt="2a"
                    />
                  </div>
                  <h1 className="text-[20px] font-semibold py-[10px]">
                    Tap, go.
                  </h1>
                  <p className="text-[14px] font-medium tracking-wider pb-10">
                    Select your menu items in the app along with your store
                    location. Then tell the barista your name when you swing by
                    the pickup area to grab your order.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mb-10">
                  <div className="w-full">
                    <img
                      className="object-cover"
                      src="./assets/2B.webp"
                      alt="2B"
                    />
                  </div>
                  <h1 className="text-[20px] font-semibold py-[10px]">
                    Just for you
                  </h1>
                  <p className="text-[14px] font-medium tracking-wider pb-10">
                    Our app lets you customize your order and track an estimated
                    pickup time. Make sure to save your favorites so they’re all
                    ready for your next order.
                  </p>
                </div>
              </SwiperSlide>
              <div className="swiper-button-next swiper-next-2" />
              <div className="swiper-button-prev swiper-prev-2" />
            </Swiper>
          </div>
        </div>
      )}

      {modal3 && (
        <div
          onClick={() => setModal3(false)}
          className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg shadow-lg w-[90%] max-w-[400px] p-6 text-center"
          >
            <div onClick={() => setModal3(false)} className="text-end">
              <span className="tracking-widest text-[20px] font-semibold cursor-pointer">
                X
              </span>
            </div>
            <Swiper
              style={{
                "--swiper-navigation-color": "#6b6b6b",
                "--swiper-navigation-size": "24px",
              }}
              cssMode={true}
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={{
                nextEl: ".swiper-button-next.swiper-next-2",
                prevEl: ".swiper-button-prev.swiper-prev-2",
              }}
              keyboard={true}
              modules={[Navigation, Pagination, Keyboard]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="mb-10">
                  <div className="w-full">
                    <img
                      className="object-cover"
                      src="./assets/3A.webp"
                      alt="3a"
                    />
                  </div>
                  <h1 className="text-[20px] font-semibold py-[10px]">
                    Bonus Star challenges
                  </h1>
                  <p className="text-[14px] font-medium tracking-wider pb-10">
                    Rack up the Stars with regular opportunities to get rewarded
                    for what you love.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="mb-10">
                <div>
                  <div className="w-full">
                    <img
                      className="object-cover"
                      src="./assets/3B.webp"
                      alt="3B"
                    />
                  </div>
                  <h1 className="text-[20px] font-semibold py-[10px]">
                    Double Star Days
                  </h1>
                  <p className="text-[14px] font-medium tracking-wider pb-10">
                    Watch for those special days where you’ll earn twice the
                    Stars on almost everything.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="w-full">
                    <img
                      className="object-cover"
                      src="./assets/3C.webp"
                      alt="3C"
                    />
                  </div>
                  <h1 className="text-[20px] font-semibold py-[10px]">
                    Member-only games
                  </h1>
                  <p className="text-[14px] font-medium tracking-wider pb-10">
                    Play for a chance to win exclusive prizes, free food and
                    drinks, and more.
                  </p>
                </div>
              </SwiperSlide>
              <div className="swiper-button-next swiper-next-2" />
              <div className="swiper-button-prev swiper-prev-2" />
            </Swiper>
          </div>
        </div>
      )}

      <div className="bg-[#f2f0eb]">
        <div className="px-[1rem] md:px-[3rem] py-[3rem]">
          <div className="text-center py-[3rem] md:max-w-[600px] md:mx-auto ">
            <h2 className="font-semibold text-[1.5rem] pb-[1rem] md:text-[2rem]">
              Cash or card, you earn Stars
            </h2>
            <p className="text-[14px] font-[450] md:text-[16px]">
              No matter how you pay, you can earn Stars with your morning
              coffee. Those Stars add up to (really delicious) Rewards.
            </p>
          </div>
          <div className="grid lg:flex justify-center max-w-[1400px]">
            <div className="lg:w-[30%]">
              <p className="text-[1.2rem] font-semibold md:text-[1.5rem]">
                1★ per dollar
              </p>
              <p>Pay as you go</p>
            </div>
            <div className="md:flex ">
              <div className="flex md:w-[50%] lg:w-[40%] pt-[1.2rem]">
                <div className="max-w-[128px] pr-[1rem]">
                  <img
                    className="min-w-[112px] max-w-full"
                    src="./assets/1A.png"
                    alt="1A"
                  />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold md:text-[20px]">
                    Scan and pay separately
                  </h3>
                  <p className="pt-[1rem] text-[14px] md:text-[16px]">
                    Use cash or credit/debit card at the register.
                  </p>
                </div>
              </div>
              <div className="flex md:w-[50%] lg:w-[40%] pt-[1.2rem]">
                <div className="max-w-[128px] mx-auto pr-[1rem]">
                  <img
                    className="min-w-[112px] max-w-full"
                    src="./assets/1Bb.webp"
                    alt="1b"
                  />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold md:text-[20px]">
                    Save payment in the app
                  </h3>
                  <p className="pt-[1rem] text-[14px] md:text-[16px] ">
                    Check-out faster by saving a credit/debit card or PayPal to
                    your account. You’ll be able to order ahead or scan and pay
                    at the register in one step.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className="block my-[2rem] border-[#aeaeab]" />

          <div className="grid lg:flex">
            <div className="lg:w-[30%]">
              <p className="text-[1.2rem] font-semibold md:text-[1.5rem]">
                2★ per dollar
              </p>
              <p>Add funds in the app</p>
            </div>
            <div className="md:flex">
              <div className="flex md:w-[50%] lg:w-[40%] pt-[1.2rem]">
                <div className="max-w-[128px] mx-auto pr-[1rem]">
                  <img
                    className="min-w-[112px]"
                    src="./assets/2A.png"
                    alt="2A"
                  />
                </div>
                <div>
                  <h3 className="font-semibold md:text-[20px]">Preload</h3>
                  <p className="pt-[1rem] text-[14px] md:text-[16px]">
                    To save time and earn Stars twice as fast, add money to your
                    digital Starbucks Card using any payment option. Scan and
                    pay in one step or order ahead in the app.
                  </p>
                </div>
              </div>
              <div className="flex md:w-[50%] lg:w-[40%] pt-[1.2rem]">
                <div className="max-w-[128px] mx-auto pr-[1rem]">
                  <img
                    className="min-w-[112px]"
                    src="./assets/2Bbb.webp"
                    alt="2b"
                  />
                </div>
                <div>
                  <h3 className="font-semibold md:text-[20px]">
                    Register your gift card
                  </h3>
                  <p className="pt-[1rem] text-[14px] md:text-[16px]">
                    Then use it to pay through the app. You can even consolidate
                    balances from multiple cards in one place.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:bg-[url('/assets/backg.png')] bg-cover">
        <div className="px-0 md:px-[2rem] md:py-[2rem]">
          <div className="bg-[#d4e9e2] px-6 md:px-[2rem]">
          <div className="text-center py-[1rem] md:max-w-[600px]mx-auto ">
            <h2 className="font-semibold text-[1.5rem] pb-[1rem] md:text-[2rem]">
              Keep the Rewards Coming
            </h2>
            <p className="text-[14px] font-[450] md:text-[16px] ">
              The Rewards don't stop at your morning coffee. Join Starbucks®
              Rewards and unlock perks from our partners, all while earning more
              Stars.
            </p>
          </div>
          <ul className="md:flex gap-10 max-w-[900px]  lg:max-w-[1500px] lg:px-10 mx-auto">
            <li className="flex md:flex-col items-center md:w-[50%] lg:w-[40%] pt-[1.2rem]">
              <div className="max-w-[128px] pr-[1rem]">
                <img
                  className="min-w-[112px] max-w-full"
                  src="./assets/delta-skymiles.webp"
                  alt="1A"
                />
              </div>
              <div className="text-left">
                <p className="pt-[1rem] text-[14px] md:text-[16px]">
                  <a
                    className="text-[#006241] underline hover:no-underline"
                    href=""
                  >
                    {" "}
                    Link your Bank of America
                  </a>
                  eligible card and Starbucks® Rewards account to earn 2% Cash
                  Back and Bonus Stars on qualifying Starbucks in-app
                  purchases.2
                </p>
              </div>
            </li>
            <li className="flex md:flex-col items-center md:w-[50%] lg:w-[40%] pt-[1.2rem]">
              <div className="max-w-[128px] pr-[1rem]">
                <img
                  className="min-w-[112px] max-w-full"
                  src="./assets/bank-of-america.webp"
                  alt="1A"
                />
              </div>
              <div className="text-left">
                <p className="pt-[1rem] text-[14px] md:text-[16px]">
                  <a
                    className="text-[#006241] underline hover:no-underline"
                    href=""
                  >
                    Link your Marriott Bonvoy </a>
                  and Starbucks® Rewards accounts to earn Double Stars during
                  eligible stays, points during any Marriott Bonvoy Week and
                  more.3
                </p>
              </div>
            </li>
            <li className="flex md:flex-col items-center md:w-[50%] lg:w-[40%] pt-[1.2rem]">
              <div className="max-w-[128px] pr-[1rem]">
                <img
                  className="min-w-[112px] max-w-full"
                  src="./assets/marriott-logo.webp"
                  alt="1A"
                />
              </div>
              <div className="text-left">
                <p className="pt-[1rem] text-[14px] md:text-[16px]">
                  <a
                    className="text-[#006241] underline hover:no-underline"
                    href=""
                  >
                    Link your Delta SkyMiles®{" "}
                  </a>
                  and Starbucks® Rewards accounts to earn miles on Starbucks
                  Card reloads of $25 or more, plus Double Stars on travel
                  days.1
                </p>
              </div>
            </li>
          </ul>
          <div className="text-center py-[3rem]">
            <a className="bg-[hsl(158_100%_23%)] px-[16px] py-[7px] min-w-[35px] min-h-[35px] text-white rounded-full font-semibold" href="">
            Join Starbucks® Rewards
            </a>
          </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Rewards;
