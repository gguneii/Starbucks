import { Link } from "react-router-dom";
import MenuLists from "./MenuLists";
import { Helmet } from "react-helmet";

function Favorites() {
  return (
    <>
     <Helmet>
        <title>Favorites: Starbucks Coffee Company</title>
      </Helmet>
    <div>
      <MenuLists />
      <div className="lg:max-w-[1500px] mx-auto custom:pl-[115px] px-[1rem]">
        <div className="max-w-[314px]">
          <h1 className="font-bold text-[1.8rem] my-[1rem] lg:mt-[1.9rem]">
          Favorites
          </h1>
          <div className="w-[200px]">
            <img className="max-w-full" loading="lazy" src="/assets/fav-tapes.png" alt="tapes" />
          </div>
          <p className="font-semibold text-[24px] mt-3 md:text-[28px]">
          Save your favorite mixes
          </p>
          <p className="text-[#00000094] my-3 font-semibold md:text-[18px]">
          Use the heart to save customizations. Your favorites will appear here to order again.
          </p>
          <div className="flex flex-wrap pt-4">
            <Link
              to={"/signin"}
              className="border px-[16px] py-[7px] mr-[1.6rem] leading-[1.2] text-[0.9em] font-semibold border-black rounded-full hover:bg-[#eee] md:text-[18px]"
            >
              Sign in
            </Link>
            <Link
              to={"/signup"}
              className="border px-[16px] py-[7px] leading-[1.2] text-[0.9em] font-semibold border-black bg-black text-white rounded-full hover:bg-[#333] md:text-[18px]"
            >
              Join now
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Favorites;
