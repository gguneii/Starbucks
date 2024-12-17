import { Link } from "react-router-dom";
import MenuLists from "./MenuLists";

function Featured() {
  return (
    <div>
       <MenuLists />
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-center font-bold text-[28px] md:text-[55px] md:tracking-wider text-[#1e3932] mt-5 mb-10">
          The cheer is here
        </h2>

        <div className="my-[2rem] items-stretch flex flex-col md:flex-row overflow-x-hidden ">
          <div className="image bg-[#06ce8d] flex-grow justify-center items-center flex md:w-[30%]">
            <img
              src="/assets/st4.jpg"
              width="800"
              height="450"
              fetchpriority="high"
              loading="lazy"
              alt="non-dairy drink"
            />
          </div>
          <div className="content md:w-[50%] flex flex-col justify-center items-center bg-[#06ce8d]">
            <div className="text-center text-[#1e3932] py-[32px] px-[16px]">
              <h1 className="font-bold text-[22px] lg:text-[24px] lg:px-[40px] ">
                Let’s celebrate the season, together.
              </h1>
              <p className="py-[20px] md:px-[16px] px-[10px] font-semibold md:text-[22px] md:max-w-[500px] mx-auto">
                Your festive faves, like the Peppermint Mocha, are back. Perfect
                for a little holiday magic that’s delicious hot, iced or
                blended.
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
          <div className="image bg-[#06ce8d] flex-grow justify-center items-center flex md:w-[30%]">
            <img
              src="/assets/featured1.jpg"
              width="800"
              height="450"
              fetchpriority="high"
              loading="lazy"
              alt="non-dairy drink"
            />
          </div>
          <div className="content md:w-[50%] flex flex-col justify-center items-center bg-[#06ce8d]">
            <div className="text-center text-[#1e3932] py-[32px] px-[16px]">
              <h1 className="font-bold text-[22px] lg:text-[24px] lg:px-[40px] ">
                New Cran-Merry Orange Refreshers
              </h1>
              <p className="py-[20px] md:px-[16px] px-[10px] font-semibold md:text-[22px] md:max-w-[500px] mx-auto">
                Festive flavors of sweet orange, tart cranberry and warm spice
                are shaken with real pieces of cranberry—enjoyed alone or with
                lemonade or coconutmilk.
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

        <div className="flex flex-col my-[2rem] md:flex-row justify-center h-full gap-10">
          <div className="items-stretch flex flex-col w-full overflow-x-hidden h-full ">
            <div className="image bg-[#1e3932] justify-center items-center flex">
              <img
                src="/assets/featured2.webp"
                width="800"
                height="450"
                fetchpriority="high"
                loading="lazy"
                alt="non-dairy drink"
              />
            </div>
            <div className="content flex flex-col justify-center items-center bg-[#1e3932]">
              <div className="text-center text-white py-[32px] px-[16px]">
                <h1 className="font-bold text-[22px] lg:text-[24px] lg:px-[40px] ">
                  Elphaba’s Cold Brew
                </h1>
                <p className="py-[20px] md:px-[16px] px-[10px] font-semibold md:text-[20px] md:max-w-[500px] mx-auto">
                  A thrillifying creation inspired by the film WICKED.
                  Starbucks® signature Cold Brew sweetened with
                  peppermint-flavored syrup, topped with nondairy matcha cold
                  foam and a dusting of magical candy sprinkles.
                </p>
                <Link
                  className="inline-block rounded-full hover:bg-[#182e28] border border-white font-bold min-w-[35px] min-h-[35px] px-[16px] md:mt-[32px] py-[8px] text-center"
                  to={"menu"}
                >
                  Order now
                </Link>
              </div>
            </div>
          </div>

          <div className="items-stretch flex flex-col overflow-x-hidden w-full h-full">
            <div className="image bg-[#1e3932] flex-grow justify-center items-center flex">
              <img
                src="/assets/featured3.webp"
                width="800"
                height="450"
                fetchpriority="high"
                loading="lazy"
                alt="non-dairy drink"
              />
            </div>
            <div className="content flex flex-col justify-center items-center bg-[#1e3932]">
              <div className="text-center text-white py-[16px] lg:py-[32px] px-[16px]">
                <h1 className="font-bold text-[22px] lg:text-[24px] lg:px-[40px] ">
                  Glinda’s Pink Potion
                </h1>
                <p className="py-[20px] md:px-[16px] px-[10px] font-semibold md:text-[20px] md:max-w-[500px] mx-auto">
                  A fantabulous Starbucks Refreshers® Beverage inspired by the
                  film WICKED. Crafted with sweet mango and dragonfruit flavors,
                  creamy coconutmilk and real dragonfruit. Topped with nondairy
                  strawberry cold foam and sprinkles.
                </p>
                <Link
                  className="inline-block rounded-full hover:bg-[#182e28] border border-white font-bold min-w-[35px] min-h-[35px] px-[16px] md:mt-[32px] py-[8px] text-center"
                  to={"menu"}
                >
                  Order now
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col my-[2rem] md:flex-row justify-center h-full gap-10">
          <div className="items-stretch flex flex-col w-full overflow-x-hidden h-full ">
            <div className="image bg-[#d40434] justify-center items-center flex">
              <img
                src="/assets/featured4.jpg"
                width="800"
                height="450"
                fetchpriority="high"
                loading="lazy"
                alt="non-dairy drink"
              />
            </div>
            <div className="content flex flex-col justify-center items-center bg-[#d40434]">
              <div className="text-center text-white py-[32px] px-[16px]">
                <h1 className="font-bold text-[22px] lg:text-[24px] lg:px-[40px] ">
                  Caramel Brulée Latte
                </h1>
                <p className="py-[20px] md:px-[16px] px-[10px] font-semibold md:text-[20px] md:max-w-[500px] mx-auto">
                  Espresso, steamed milk and caramel brulée sauce are finished
                  with whipped cream and a crunchy caramel brulée topping.
                </p>
                <Link
                  className="inline-block rounded-full hover:bg-[#aa032a] border border-white font-bold min-w-[35px] min-h-[35px] px-[16px] md:mt-[32px] py-[8px] text-center"
                  to={"menu"}
                >
                  Order now
                </Link>
              </div>
            </div>
          </div>

          <div className="items-stretch flex flex-col overflow-x-hidden w-full h-full">
            <div className="image bg-[#d40434] flex-grow justify-center items-center flex">
              <img
                src="/assets/featured5.jpg"
                width="800"
                height="450"
                fetchpriority="high"
                loading="lazy"
                alt="non-dairy drink"
              />
            </div>
            <div className="content flex flex-col justify-center items-center bg-[#d40434]">
              <div className="text-center text-white py-[16px] lg:py-[32px] px-[16px]">
                <h1 className="font-bold text-[22px] lg:text-[24px] lg:px-[40px] ">
                  Iced Gingerbread Oatmilk Chai
                </h1>
                <p className="py-[20px] md:px-[16px] px-[10px] font-semibold md:text-[20px] md:max-w-[500px] mx-auto">
                  Warm notes of gingerbread are combined with cozy chai spices
                  and creamy oatmilk for a festive tea latte on ice.
                </p>
                <Link
                  className="inline-block rounded-full hover:bg-[#aa032a] border border-white font-bold min-w-[35px] min-h-[35px] px-[16px] md:mt-[32px] py-[8px] text-center"
                  to={"menu"}
                >
                  Order now
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col my-[2rem] md:flex-row justify-center h-full gap-10">
          <div className="items-stretch flex flex-col w-full overflow-x-hidden h-full ">
            <div className="image bg-[#06ce8d] justify-center items-center flex">
              <img
                src="/assets/featured6.jpg"
                width="800"
                height="450"
                fetchpriority="high"
                loading="lazy"
                alt="non-dairy drink"
              />
            </div>
            <div className="content flex flex-col justify-center items-center bg-[#06ce8d]">
              <div className="text-center text-[#1e3932] py-[32px] px-[16px]">
                <h1 className="font-bold text-[22px] lg:text-[24px] lg:px-[40px] ">
                  Iced Sugar Cookie Almondmilk Latte
                </h1>
                <p className="py-[20px] md:px-[16px] px-[10px] font-semibold md:text-[20px] md:max-w-[500px] mx-auto">
                  Starbucks® Blonde Espresso is combined with sugar cookie
                  flavors and almondmilk on ice. Red and green sprinkles are
                  added for a finishing touch.
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

          <div className="items-stretch flex flex-col overflow-x-hidden w-full h-full">
            <div className="image bg-[#06ce8d] flex-grow justify-center items-center flex">
              <img
                src="/assets/featured7.jpg"
                width="800"
                height="450"
                fetchpriority="high"
                loading="lazy"
                alt="non-dairy drink"
              />
            </div>
            <div className="content flex flex-col justify-center items-center bg-[#06ce8d]">
              <div className="text-center text-[#1e3932] py-[16px] md:py-[32px]  px-[16px]">
                <h1 className="font-bold text-[22px] lg:text-[24px] lg:px-[40px] ">
                  Chestnut Praline Latte
                </h1>
                <p className="py-[20px] md:px-[16px] px-[10px] font-semibold md:text-[20px] md:max-w-[500px] mx-auto">
                  Espresso and steamed milk join caramelized chestnut flavors
                  with a topping of whipped cream and spiced praline crumbs.
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
        </div>

        <div className="flex flex-col my-[2rem] md:flex-row justify-center h-full gap-10">
          <div className="items-stretch flex flex-col w-full overflow-x-hidden h-full ">
            <div className="image bg-[#d40434] justify-center items-center flex">
              <img
                src="/assets/featured8.jpg"
                width="800"
                height="450"
                fetchpriority="high"
                loading="lazy"
                alt="non-dairy drink"
              />
            </div>
            <div className="content flex flex-col justify-center items-center bg-[#d40434]">
              <div className="text-center text-white py-[32px] px-[16px]">
                <h1 className="font-bold text-[22px] lg:text-[24px] lg:px-[40px] ">
                  Pumpkin Spice Latte
                </h1>
                <p className="py-[20px] md:px-[16px] px-[10px] font-semibold md:text-[20px] md:max-w-[500px] mx-auto">
                  Espresso and steamed milk with pumpkin, cinnamon and nutmeg
                  flavors, topped with whipped cream.
                </p>
                <Link
                  className="inline-block rounded-full hover:bg-[#aa032a] border border-white font-bold min-w-[35px] min-h-[35px] px-[16px] md:mt-[32px] py-[8px] text-center"
                  to={"menu"}
                >
                  Order now
                </Link>
              </div>
            </div>
          </div>

          <div className="items-stretch flex flex-col overflow-x-hidden w-full h-full">
            <div className="image bg-[#d40434] flex-grow justify-center items-center flex">
              <img
                src="/assets/featured9.jpg"
                width="800"
                height="450"
                fetchpriority="high"
                loading="lazy"
                alt="non-dairy drink"
              />
            </div>
            <div className="content flex flex-col justify-center items-center bg-[#d40434]">
              <div className="text-center text-white py-[16px] lg:py-[32px] px-[16px]">
                <h1 className="font-bold text-[22px] lg:text-[24px] lg:px-[40px] ">
                  Pumpkin Cream Cold Brew
                </h1>
                <p className="py-[20px] md:px-[16px] px-[10px] font-semibold md:text-[20px] md:max-w-[500px] mx-auto">
                  Starbucks® Cold Brew sweetened with vanilla syrup, topped with
                  pumpkin cream cold foam and a dusting of pumpkin-spice
                  topping.
                </p>
                <Link
                  className="inline-block rounded-full hover:bg-[#aa032a] border border-white font-bold min-w-[35px] min-h-[35px] px-[16px] md:mt-[32px] py-[8px] text-center"
                  to={"menu"}
                >
                  Order now
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col my-[2rem] md:flex-row justify-center h-full gap-10">
          <div className="items-stretch flex flex-col w-full overflow-x-hidden h-full ">
            <div className="image bg-[#06ce8d] justify-center items-center flex">
              <img
                src="/assets/featured10.jpg"
                width="800"
                height="450"
                fetchpriority="high"
                loading="lazy"
                alt="non-dairy drink"
              />
            </div>
            <div className="content flex flex-col justify-center items-center bg-[#06ce8d]">
              <div className="text-center text-[#1e3932] py-[32px] px-[16px]">
                <h1 className="font-bold text-[22px] lg:text-[24px] lg:px-[40px] ">
                  New Turkey Sage Danish
                </h1>
                <p className="py-[20px] md:px-[16px] px-[10px] font-semibold md:text-[20px] md:max-w-[500px] mx-auto">
                  A crisp and flaky pastry with turkey and stuffing spices,
                  enrobed in a creamy béchamel sauce.
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

          <div className="items-stretch flex flex-col overflow-x-hidden w-full h-full">
            <div className="image bg-[#08bf84] flex-grow justify-center items-center flex">
              <img
                src="/assets/featured11.webp"
                width="800"
                height="450"
                fetchpriority="high"
                loading="lazy"
                alt="non-dairy drink"
              />
            </div>
            <div className="content flex flex-col justify-center items-center bg-[#08bf84]">
              <div className="text-center text-[#1e3932] py-[32px] lg:py-[16px] px-[16px]">
                <h1 className="font-bold text-[22px] lg:text-[24px] lg:px-[40px] ">
                  New Snowman Cake Pop
                </h1>
                <p className="py-[20px] md:px-[16px] px-[10px] font-semibold md:text-[20px] md:max-w-[500px] mx-auto">
                  Vanilla cake mixed with buttercream, dipped in white-chocolaty
                  icing with a snowman face and earmuffs.
                </p>
                <Link
                  className="inline-block rounded-full hover:bg-[#aa032a] border border-[#1e3932] font-bold min-w-[35px] min-h-[35px] px-[16px] md:mt-[32px] py-[8px] text-center"
                  to={"menu"}
                >
                  Order now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
