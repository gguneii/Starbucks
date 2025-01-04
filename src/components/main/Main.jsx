import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
     <Helmet>
        <title>Starbucks Coffee Company</title>
      </Helmet>
    <main className="main border-b">
      <div className="max-w-[1440px] mx-auto">
        <div className="my-[2rem] items-stretch flex flex-col md:flex-row-reverse overflow-x-hidden ">
          <div className="image bg-[#00754a] flex-grow md:w-[60%]">
            <img
              src="/assets/st1.webp"
              alt="non-dairy drink"
              width="800"
              height="450"
              fetchpriority="high"
              loading="lazy"
            />
          </div>
          <div className="content md:w-[40%] flex flex-col justify-center items-center bg-[#006241]">
            <div className="text-center text-white tracking-widest py-[32px] px-[16px]">
              <h1 className="font-soDoSansReg text-[20px] md:text-[24px] ">
                Non-dairy now at no extra charge
              </h1>
              <p className="leading-6 py-[20px] md:text-[19px] md:max-w-[450px]">
                Now you can order your favorite Starbucks® handcrafted drink and
                customize it with any non-dairy milk at no extra charge.*
              </p>
              <Link
                className="inline-block rounded-full hover:bg-[#004e34] border min-w-[35px] min-h-[35px] px-[16px] md:mt-[32px] py-[8px] text-center font-semibold"
                to={"menu"}
              >
                Order now
              </Link>
            </div>
          </div>
        </div>
        <div className="my-[2rem] items-stretch flex flex-col md:flex-row overflow-x-hidden ">
          <div className="image bg-[#d50032] flex-grow justify-center items-center flex md:w-[50%]">
            <img
              src="/assets/st2.jpg"
              width="800"
              height="450"
              fetchpriority="high"
              loading="lazy"
              alt="non-dairy drink"
            />
          </div>
          <div className="content md:w-[50%] flex flex-col justify-center items-center bg-[#d50032]">
            <div className="text-center text-white tracking-widest py-[32px] px-[16px]">
              <h1 className="font-soDoSansReg text-[26px] lg:text-[50px] lg:px-[40px] ">
                Cheerful nondairy faves
              </h1>
              <p className="leading-8 py-[20px] md:px-[16px] md:font-semibold text-[22px] md:max-w-[500px] mx-auto">
                These holiday delights are all you. Try a Pecan Crunch Oatmilk
                Latte, a Sugar Cookie Almondmilk Latte or an Iced Gingerbread
                Oatmilk Chai.
              </p>
              <Link
                className="inline-block rounded-full hover:bg-[#aa0028] border min-w-[35px] min-h-[35px] px-[16px] md:mt-[32px] py-[8px] text-center font-semibold"
                to={"menu"}
              >
                Order now
              </Link>
            </div>
          </div>
        </div>

        <div className="my-[2rem] items-stretch flex flex-col md:flex-row-reverse overflow-x-hidden ">
          <div className="image bg-[#00754a] flex-grow md:w-[60%]">
            <img
              src="/assets/st3.jpg"
              width="800"
              height="450"
              fetchpriority="high"
              loading="lazy"
              alt="non-dairy drink"
            />
          </div>
          <div className="content md:w-[40%] flex flex-col justify-center items-center bg-[#f2f0eb]">
            <div className="text-center text-[#006241] tracking-widest py-[32px] px-[16px]">
              <h1 className="font-soDoSansReg text-[20px] px-4 md:text-[24px] ">
                Unwrap your first gift
              </h1>
              <p className="leading-6 py-[20px] px-4 font-semibold md:text-[19px] md:max-w-[400px] lg:leading-8">
                Join Starbucks® Rewards and get a <strong>free drink</strong>
                with qualifying purchase during your first week.**
              </p>
              <Link to={"/signup"}
                className="inline-block rounded-full hover:bg-[#d9e4da] border border-[#006241] min-w-[32px] min-h-[32px] px-[8px] md:mt-[12px] py-[4px] text-center font-semibold"
                href=""
              >
                Join now
              </Link>
            </div>
          </div>
        </div>

        <div className="my-[2rem] items-stretch flex flex-col md:flex-row overflow-x-hidden ">
          <div className="image bg-[#06ce8d] flex-grow justify-center items-center flex md:w-[60%]">
            <img
              src="/assets/st4.jpg"
              width="800"
              height="450"
              fetchpriority="high"
              loading="lazy"
              alt="non-dairy drink"
            />
          </div>
          <div className="content md:w-[40%] flex flex-col justify-center items-center bg-[#06ce8d]">
            <div className="text-center text-[#1e3932] tracking-widest py-[32px] px-[16px]">
              <h1 className="font-soDoSansReg text-[26px] lg:text-[50px] lg:px-[40px] ">
                Peppermint merriment
              </h1>
              <p className="leading-8 py-[20px] md:px-[16px] md:font-semibold text-[22px] md:max-w-[500px] mx-auto">
                Make today merry with the festive flavors of a Peppermint Mocha.
              </p>
              <Link
                className="inline-block rounded-full hover:bg-[#08bf84] border border-[#1e3932] font-bold min-w-[35px] min-h-[35px] px-[16px] md:mt-[32px] py-[8px] text-center"
                to={"menu"}
              >
                Order now
              </Link>
            </div>
          </div>
        </div>

        <div className="my-[2rem] items-stretch flex flex-col md:flex-row-reverse overflow-x-hidden ">
          <div className="image bg-[#06ce8d] flex-grow justify-center items-center flex md:w-[50%]">
            <img
              src="/assets/st5.jpg"
              width="800"
              height="450"
              fetchpriority="high"
              loading="lazy"
              alt="non-dairy drink"
            />
          </div>
          <div className="content md:w-[50%] flex flex-col justify-center items-center bg-[#06ce8d]">
            <div className="text-center text-[#1e3932] tracking-widest py-[32px] px-[16px]">
              <h1 className="font-soDoSansReg text-[26px] lg:text-[50px] lg:px-[40px]">
                Merrily delicious
              </h1>
              <p className="leading-8 py-[20px] md:px-[16px] md:font-semibold text-[22px] md:max-w-[500px] mx-auto">
                Grab a toasty warm sandwich or a new Turkey Sage Danish and make
                your afternoon feel oh-so bright.
              </p>
              <Link
                className="inline-block rounded-full hover:bg-[#08bf84] border border-[#1e3932] font-bold min-w-[35px] min-h-[35px] px-[16px] md:mt-[32px] py-[8px] text-center"
                to={"menu"}
              >
                Order now
              </Link>
            </div>
          </div>
        </div>
        <div className="my-[2rem] items-stretch flex flex-col md:flex-row overflow-x-hidden">
          <div className="image bg-[#1e3932] flex-grow justify-center items-center flex md:w-[55%]">
            <img
              src="/assets/st6.jpg"
              width="800"
              height="450"
              fetchpriority="high"
              loading="lazy"
              alt="non-dairy drink"
            />
          </div>
          <div className="content md:w-[45%] flex flex-col justify-center items-center bg-[#1e3932]">
            <div className="text-center text-white tracking-widest py-[32px] px-[16px]">
              <h1 className="font-soDoSansReg text-[26px] lg:text-[50px] lg:px-[40px]">
                So sudden and new
              </h1>
              <p className="leading-8 py-[20px] md:px-[16px] md:font-semibold text-[22px] md:max-w-[500px] mx-auto">
                Look to the Western Sky for our new WICKED-inspired collection.
                In select stores 11/7 while supplies last.***
              </p>
              <a
                className="inline-block rounded-full hover:bg-[#08bf84] border font-bold min-w-[35px] min-h-[35px] px-[16px] md:mt-[32px] py-[8px] text-center"
                href=""
              >
                Learn more
              </a>
            </div>
          </div>
        </div>

        <div>
          <p className="px-[16px] md:max-w-[700px] mx-auto text-[14px] leading-[1.8] font-medium py-[32px] text-center">
            *Applies to non-dairy milk customizations on standard beverages at
            cafés owned and operated by Starbucks in the U.S. and Canada.
          </p>
        </div>

        <div>
          <p className="px-[16px] md:max-w-[700px] mx-auto text-[14px] leading-[1.8] font-medium py-[32px] text-center">
            **Valid only for new Starbucks Rewards members for 7 days from sign
            up. Offer good at participating stores for a handcrafted menu-sized
            beverage with qualifying purchase ($8 max value). Qualifying
            purchase excludes alcohol, Starbucks Card and Starbucks Card
            reloads. Limit one per member. Cannot be combined with other offers
            or discounts. Excludes delivery services. Sign up before 1/2/2025 to
            be eligible.
          </p>
        </div>
        <div>
          <p className="px-[16px] md:max-w-[700px] mx-auto text-[14px] leading-[1.8] font-medium py-[32px] text-center">
            ***Available in participating U.S. stores, while supplies last.
          </p>
        </div>
      </div>
    </main>
    </>
  );
}

export default Main;
