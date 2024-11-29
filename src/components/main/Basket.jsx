import { Link } from "react-router-dom";

function Basket() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1e3932] z-[2] ">
      <div className="py-[1rem] flex items-center justify-between w-full px-[1.6rem]">
        <div className="custom:px-[100px] lg:mx-auto">
        <Link
          to={'/location'}
          className="flex shadow-[inset_0_-1.5px_0_#ffffff4d] w-full items-center justify-between md:justify-start md:flex-grow-0 min-w-[24px] flex-grow"
        >
          <p className="text-[#ffffffb3] pb-1 text-[14px] font-semibold lg:hidden">
            For item availability, choose a store
          </p>
          <div className="text-[#ffffffb3] hidden pb-1 font-semibold lg:block">
            For item availability
            <p className="text-white text-[18px]">
            Choose a store
            </p>
          </div>
          <svg
            aria-hidden="true"
            className="w-[18px] h-[18px] lg:ml-10 fill-white"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            loading="lazy"
          >
            <path d="M11.96 15.5c-.206 0-.402-.084-.546-.232l-5.188-5.33c-.3-.31-.3-.81 0-1.12.3-.31.79-.31 1.093 0l4.64 4.767 4.723-4.853c.3-.31.79-.31 1.09 0 .303.31.303.812.002 1.122l-5.27 5.414c-.145.148-.34.232-.546.232"></path>
          </svg>
        </Link>
        </div>

        <button className="ml-[20px] lg:mx-auto">
            <span className="bg-[url('/assets/basket.svg')] w-[32px] h-[32px] inline-flex items-center text-white font-bold justify-center bg-no-repeat">
              2
            </span>
        </button>
      </div>
    </div>
  );
}

export default Basket;
