import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOCATION } from "../../context/LocationContext";
import { Helmet } from "react-helmet";

function Location() {
  // useEffect(() => {
  //   document.body.style.overflow = "hidden";
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, []);

const {selectedLocation, setSelectedLocation, locations} = useContext(LOCATION)
  return (
   <>
    <Helmet>
        <title>Store Locator: Starbucks Coffee Company</title>
      </Helmet>
    <div className="flex flex-col lg:flex-row">
      <div className="left-side lg:w-[40%] ">
        <div className="flex items-center py-[1.6rem] px-[1.6rem]">
          <form className="flex items-center flex-grow relative">
            <input
              type="search"
              className="border-b py-2 px-2 border-[#00000094] w-full whitespace-nowrap outline-2 outline-[#00754a]"
              placeholder="Find a store"
              autoComplete="off"
            />
            <button className="absolute right-3">
              <svg
                aria-hidden="true"
                className="w-[24px] h-[24px] fill-[#00000094]"
                focusable="false"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path d="M15.447 15.043c-1.36 1.435-3.246 2.263-5.27 2.263-3.994 0-7.23-3.216-7.23-7.18 0-3.965 3.236-7.18 7.23-7.18 3.996 0 7.233 3.215 7.233 7.18 0 .47-.046.935-.136 1.39-.084.426.193.84.62.924.425.084.838-.193.922-.62.11-.555.166-1.122.166-1.695 0-4.835-3.943-8.752-8.804-8.752-4.86 0-8.804 3.918-8.804 8.752 0 4.835 3.943 8.753 8.804 8.753 2.46 0 4.758-1.01 6.41-2.754.3-.315.285-.813-.03-1.11-.315-.3-.812-.286-1.11.03zm1.307 2.725l4.506 4.477c.308.306.806.304 1.112-.004.306-.305.304-.802-.004-1.11l-4.506-4.476c-.308-.305-.805-.304-1.11.004-.307.308-.306.806.002 1.112z"></path>
              </svg>
            </button>
          </form>

          <div className="flex self-end">
            <button className="min-w-[35px] min-h-[35px] ml-[2.4rem] whitespace-nowrap border rounded-full border-[#00754a]  px-[14px] text-[#00754a]">
              Filter
            </button>
          </div>
        </div>
        <section className="locations hidden lg:block max-h-[80vh] overflow-y-scroll ">
          <div className="my-2">
            {locations.map((location) => {
              return (
                <div
                  key={location.id}
                  onClick={() => setSelectedLocation(location)}
                  className={`rounded-lg mx-1 cursor-pointer flex justify-between py-4 px-[1.2rem] ${
                    selectedLocation.id === location.id
                      ? "border-2 border-[#006241] bg-[#e5efec]"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <div className=" ">
                    <h3 className="font-bold">{location.name}</h3>
                    <p className="text-[14px] font-normal">
                      {location.address}
                    </p>
                    <p className="text-[14px] font-normal">
                      {location.distance}
                    </p>
                    <ul className="mt-[.8rem]">
                      <li className="flex">
                        <svg
                          aria-hidden="true"
                          className="W-[16px] h-[16px]"
                          focusable="false"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                            className="fill-yellow-400"
                          ></path>
                          <path
                            d="M12 6C11.4477 6 11 6.44772 11 7V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V7C13 6.44772 12.5523 6 12 6Z M11 17.0039V16.9961C11 16.446 11.4477 16 12 16C12.5523 16 13 16.446 13 16.9961V17.0039C13 17.554 12.5523 18 12 18C11.4477 18 11 17.554 11 17.0039Z"
                            fill="var(--colorBlack)"
                          ></path>
                        </svg>
                        <span className="ml-[.4rem] text-[#00000094] text-[14px] font-semibold">
                          Closed
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="flex justify-center items-center">
                      <button>
                        <svg
                          aria-hidden="true"
                          className="w-[24px] h-[24px]"
                          focusable="false"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path d="M16.5,3 C19.5376,3 22,5.46243 22,8.5 C22,11.5926816 19.6383608,14.6853633 16.5381361,17.4534208 L15.983701,17.9384657 C15.8901274,18.0187229 15.7959975,18.0986827 15.7013526,18.1783369 L15.1276331,18.652529 L14.543535,19.1189905 C14.4454306,19.1960678 14.3469763,19.2728065 14.2482134,19.3491983 L13.652264,19.8033203 C13.5524321,19.8782914 13.4523743,19.9528992 13.3521317,20.0271353 L12.7487908,20.4680259 C12.5471588,20.6134587 12.3451184,20.7573388 12.143,20.8996 C12.0571,20.9601 11.9429,20.9601 11.857,20.8996 L11.5539246,20.6850023 L10.6478765,20.0271353 L10.0489708,19.5773247 C9.94963261,19.5016349 9.85056163,19.42559 9.75179918,19.3491983 L9.16325721,18.8867509 C9.06589407,18.8090045 8.96892204,18.7309278 8.87238244,18.652529 L8.29866417,18.1783369 C8.20401941,18.0986827 8.10988967,18.0187229 8.01631623,17.9384657 L7.46188162,17.4534208 C4.36165841,14.6853633 2,11.5926816 2,8.5 C2,5.46243 4.46243,3 7.5,3 C9.36016,3 11.0046,3.92345 12,5.33692 C12.9954,3.92345 14.6398,3 16.5,3 Z M16.5,4.1 C15.1300381,4.1 13.8676241,4.72948264 13.0407059,5.78047369 L12.8993666,5.97027588 L12,7.2473783 L11.1006334,5.97027588 C10.2805325,4.805731 8.9505234,4.1 7.5,4.1 C5.06994322,4.1 3.1,6.06994322 3.1,8.5 C3.1,11.3891322 5.57378772,14.6442152 9.99387234,18.1421811 L10.6714163,18.6686822 C11.017421,18.9328282 11.3742252,19.1983058 11.7416065,19.4650631 L11.999,19.651 L12.2586323,19.464899 C17.6466419,15.5526619 20.7596736,11.9154736 20.8953699,8.71737018 L20.9,8.5 C20.9,6.06993194 18.9300755,4.1 16.5,4.1 Z"></path>
                        </svg>
                      </button>
                      <a className="ml-[2rem]" href="">
                        <svg
                          aria-hidden="true"
                          className="w-[24px] h-[24px]"
                          focusable="false"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 1.35C6.118 1.35 1.35 6.118 1.35 12c0 5.882 4.768 10.65 10.65 10.65 5.882 0 10.65-4.768 10.65-10.65 0-5.882-4.768-10.65-10.65-10.65zm0 1.5c5.053 0 9.15 4.097 9.15 9.15s-4.097 9.15-9.15 9.15S2.85 17.053 2.85 12 6.947 2.85 12 2.85zm-.75 7.928v6.486c0 .414.336.75.75.75s.75-.336.75-.75v-6.486c0-.414-.336-.75-.75-.75s-.75.336-.75.75zm1.5-3.056v-.61c0-.415-.336-.75-.75-.75s-.75.335-.75.75v.61c0 .414.336.75.75.75s.75-.336.75-.75z"></path>
                        </svg>
                      </a>
                    </div>

                    <div className="my-[.8rem]">
                      <Link to={"/cart"} className="bg-[hsl(158_100%_23%)] !whitespace-nowrap font-semibold text-center text-white px-[16px] py-[7px] rounded-full">
                        Order here
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <div className="right-side lg:w-[60%]">
        <div className="map">
          <iframe
            src={selectedLocation.iframeSrc}
            allowFullScreen=""
            loading="lazy"
            className="border-0 w-full h-[450px] lg:h-[90vh]"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <section className="locations  block lg:hidden mt-4">
          <div className="min-h-[400px]">
             {locations.map((location) => {
              return (
                <div
                  key={location.id}
                  onClick={() => setSelectedLocation(location)}
                  className={`rounded-lg mx-1 cursor-pointer flex justify-between py-4 px-[1.2rem] ${
                    selectedLocation.id === location.id
                      ? "border-2 border-[#006241] bg-[#e5efec]"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <div className=" ">
                    <h3 className="font-bold">{location.name}</h3>
                    <p className="text-[14px] font-normal">
                      {location.address}
                    </p>
                    <p className="text-[14px] font-normal">
                      {location.distance}
                    </p>
                    <ul className="mt-[.8rem]">
                      <li className="flex">
                        <svg
                          aria-hidden="true"
                          className="W-[16px] h-[16px]"
                          focusable="false"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                            className="fill-yellow-400"
                          ></path>
                          <path
                            d="M12 6C11.4477 6 11 6.44772 11 7V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V7C13 6.44772 12.5523 6 12 6Z M11 17.0039V16.9961C11 16.446 11.4477 16 12 16C12.5523 16 13 16.446 13 16.9961V17.0039C13 17.554 12.5523 18 12 18C11.4477 18 11 17.554 11 17.0039Z"
                            fill="var(--colorBlack)"
                          ></path>
                        </svg>
                        <span className="ml-[.4rem] text-[#00000094] text-[14px] font-semibold">
                          Closed
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="flex justify-center items-center">
                      <button>
                        <svg
                          aria-hidden="true"
                          className="w-[24px] h-[24px]"
                          focusable="false"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path d="M16.5,3 C19.5376,3 22,5.46243 22,8.5 C22,11.5926816 19.6383608,14.6853633 16.5381361,17.4534208 L15.983701,17.9384657 C15.8901274,18.0187229 15.7959975,18.0986827 15.7013526,18.1783369 L15.1276331,18.652529 L14.543535,19.1189905 C14.4454306,19.1960678 14.3469763,19.2728065 14.2482134,19.3491983 L13.652264,19.8033203 C13.5524321,19.8782914 13.4523743,19.9528992 13.3521317,20.0271353 L12.7487908,20.4680259 C12.5471588,20.6134587 12.3451184,20.7573388 12.143,20.8996 C12.0571,20.9601 11.9429,20.9601 11.857,20.8996 L11.5539246,20.6850023 L10.6478765,20.0271353 L10.0489708,19.5773247 C9.94963261,19.5016349 9.85056163,19.42559 9.75179918,19.3491983 L9.16325721,18.8867509 C9.06589407,18.8090045 8.96892204,18.7309278 8.87238244,18.652529 L8.29866417,18.1783369 C8.20401941,18.0986827 8.10988967,18.0187229 8.01631623,17.9384657 L7.46188162,17.4534208 C4.36165841,14.6853633 2,11.5926816 2,8.5 C2,5.46243 4.46243,3 7.5,3 C9.36016,3 11.0046,3.92345 12,5.33692 C12.9954,3.92345 14.6398,3 16.5,3 Z M16.5,4.1 C15.1300381,4.1 13.8676241,4.72948264 13.0407059,5.78047369 L12.8993666,5.97027588 L12,7.2473783 L11.1006334,5.97027588 C10.2805325,4.805731 8.9505234,4.1 7.5,4.1 C5.06994322,4.1 3.1,6.06994322 3.1,8.5 C3.1,11.3891322 5.57378772,14.6442152 9.99387234,18.1421811 L10.6714163,18.6686822 C11.017421,18.9328282 11.3742252,19.1983058 11.7416065,19.4650631 L11.999,19.651 L12.2586323,19.464899 C17.6466419,15.5526619 20.7596736,11.9154736 20.8953699,8.71737018 L20.9,8.5 C20.9,6.06993194 18.9300755,4.1 16.5,4.1 Z"></path>
                        </svg>
                      </button>
                      <a className="ml-[2rem]" href="">
                        <svg
                          aria-hidden="true"
                          className="w-[24px] h-[24px]"
                          focusable="false"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 1.35C6.118 1.35 1.35 6.118 1.35 12c0 5.882 4.768 10.65 10.65 10.65 5.882 0 10.65-4.768 10.65-10.65 0-5.882-4.768-10.65-10.65-10.65zm0 1.5c5.053 0 9.15 4.097 9.15 9.15s-4.097 9.15-9.15 9.15S2.85 17.053 2.85 12 6.947 2.85 12 2.85zm-.75 7.928v6.486c0 .414.336.75.75.75s.75-.336.75-.75v-6.486c0-.414-.336-.75-.75-.75s-.75.336-.75.75zm1.5-3.056v-.61c0-.415-.336-.75-.75-.75s-.75.335-.75.75v.61c0 .414.336.75.75.75s.75-.336.75-.75z"></path>
                        </svg>
                      </a>
                    </div>

                    <div className="my-[.8rem] whitespace-nowrap">
                      <Link to={"/cart"} className="bg-[hsl(158_100%_23%)] font-semibold text-center text-white px-[18px] py-[7px] rounded-full">
                        Order here
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
   </>
  );
}

export default Location;
