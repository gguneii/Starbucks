import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Basket from "./Basket";
import { DATA } from "../../context/DataContext";
import { Helmet } from "react-helmet";
import Customize from "./Customize";
import ScrollTo from "../../utils/ScrollTo";

function ProductDetails() {
  const [selectedVal, setSelectedVal] = useState("Water");
  const [selectedVal2, setSelectedVal2] = useState("Signature Espresso");
  const { data, details } = useContext(DATA);
  const { id, temp } = useParams();
  const [productName, setProductName] = useState(null);
  const [showCustomize, setShowCustomize] = useState(true);
  const [calory, setCalory] = useState(15);
  const [count, setCount] = useState(3);
  const [size, setSize] = useState("Grande");
  
  useEffect(() => {
    if (size === "Short") {
      setCalory(5);
      setCount(1);
    } else if (size === "Tall") {
      setCalory(10);
      setCount(2);
    } else if (size === "Grande") {
      setCalory(15);
      setCount(3);
    } else if (size === "Venti") {
      setCalory(15);
      setCount(4);
    } else if (size === "Trenta") {
      setCalory(15);
      setCount(4);
    }
  }, [size]);
  const handleChange = (e) => {
    setSelectedVal(e.target.value);
  };
  const handleChange2 = (e) => {
    setSelectedVal2(e.target.value);
  };

  const chooseSize = (selectedSize) => {
    setSize(selectedSize);
  };

  const { pathname } = useLocation();
  ScrollTo(pathname, 0);

  useEffect(() => {
    if (data) {
      const findProduct = (items) => {
        for (const item of items) {
          if (item.products && item.products.length > 0) {
            const product = item.products.find(
              (prod) =>
                prod.productNumber === parseInt(id) && prod.formCode === temp
            );
            if (product) {
              return product;
            }
          }
          if (item.children && item.children.length > 0) {
            const foundInChildren = findProduct(item.children);
            if (foundInChildren) {
              return foundInChildren;
            }
          }
        }
        return null;
      };

      const product = findProduct(data);
      if (product) {
        setProductName(product);
      }
    }
  }, [data, id, temp]);

  const sizeImages = [
    {
      name: "Short",
      size: "8 fl oz",
      img: "/assets/short.svg",
      imgActive: "/assets/shortactive.svg",
    },
    {
      name: "Tall",
      size: "12 fl oz",
      img: "/assets/tall.svg",
      imgActive: "/assets/tallactive.svg",
    },
    {
      name: "Grande",
      size: "16 fl oz",
      img: "/assets/grande.svg",
      imgActive: "/assets/grandeactive.svg",
    },
    {
      name: "Venti",
      size: "20 fl oz",
      img: "/assets/venti.svg",
      imgActive: "/assets/ventiavtive.svg",
    },
    {
      name: "Trenta",
      size: "30 fl oz",
      img: "/assets/trante.svg",
      imgActive: "/assets/tranteactive.svg",
    },
  ];

  const handleCustomize = (val) => {
    setShowCustomize(val);
  };

  return (
    <>
      <Helmet>
        <title>
          {productName?.name
            ? `${productName.name}: Starbucks Coffee Company`
            : "Loading..."}
        </title>
      </Helmet>

      <main className="">
        <nav className="w-full sticky top-0 z-[2] bg-white">
          <ul className="flex lg:max-w-[1500px] mx-auto custom:pl-[115px] px-[1rem] py-[1rem]">
            <li>
              <a href=""></a>Menu /
            </li>
            <li>
              <a href=""></a> Hot Coffees /{" "}
            </li>
            <li>
              <a href=""></a> Caffe Americano
            </li>
          </ul>
        </nav>
        <div className="bg-[#1f3933]">
          <div className="xl:max-w-[1000px] mx-auto flex flex-col lg:flex-row items-center">
            <div className="overflow-hidden max-w-[330px] lg:mr-[88px] xl:mx-0 mx-auto">
              <img
                className="w-full"
                src={productName?.assets?.masterImage?.uri || ""}
                alt="error_img"
                // onError={(e) => {
                //   e.target.src = "/assets/errImg.webp";
                // }}
              />
            </div>
            <div className="content max-w-[420px] mx-auto text-center lg:ml-[44px] xl:mx-auto lg:text-start">
              <h1 className="text-white font-soDoSans text-[26px] md:text-[36px]">
                {productName?.name}
              </h1>
              <p className="text-[#ffffffb3] text-[18px] md:text-[25px] pb-5">
                {calory} calories
              </p>
            </div>
          </div>
        </div>

        {showCustomize ? (
          <div className="update lg:flex">
            <div className="sizes max-w-[450px] px-[1.6rem] lg:w-[50%] xl:w-[40%] xl:mx-[80px] mx-auto mt-[1.3rem]">
              <div className="">
                <h2 className="font-semibold text-[1.2rem] pb-[1rem] px-2 md:text-[1.7rem] border-b-[4px] border-[#d4e9e2]">
                  Size options
                </h2>
              </div>
              <form className="mt-10">
                <fieldset className="flex items-center justify-center gap-8">
                  {productName?.sizes &&
                    productName?.sizes.map((item) => {
                      const sizeImage = sizeImages.find(
                        (ad) => ad.name === item.sizeCode
                      );
                      // console.log("sizeImage:", sizeImage);

                      return (
                        <label
                          key={item.sizeCode}
                          onClick={() => chooseSize(item.sizeCode)}
                          className={`flex flex-col items-center justify-center cursor-pointer h-[104px] text-center`}
                        >
                          <img
                            loading="lazy"
                            src={
                              size === item.sizeCode
                                ? sizeImage?.imgActive
                                : sizeImage?.img
                            }
                            alt={item?.sizeCode}
                            className={`w-[45px] h-[45px]  object-contain ${
                              size === item.sizeCode
                                ? "outline outline-2 outline-[#00754a] outline-offset-2 rounded-full bg-[#f0f7f5] transition-all" // Aktiv olarkən tətbiq olunan siniflər
                                : ""
                            }`}
                          />
                          <p className="font-semibold text-[14px] py-1 md:text-[17px]">
                            {item?.sizeCode}
                          </p>
                          <p className="text-[14px] md:text-[15px] ">
                            {sizeImage?.size}
                          </p>
                        </label>
                      );
                    })}
                </fieldset>
              </form>
            </div>
            <div className="included max-w-[450px] px-[1.6rem] lg:w-[50%] xl:w-[60%] xl:ml-[40px] mx-auto mt-[1.6rem]">
              <div className="">
                <h2 className="font-semibold text-[1.2rem] pb-[1rem] px-2 md:text-[1.7rem] border-b-[4px] border-[#d4e9e2]">
                  What's included
                </h2>
              </div>
              <div className="water_added">
                <div className="shadow-[0_0_0_1px_#00000094] focus-within:shadow-[0_0_0_2px_#00754a] focus-within:bg-[hsl(160_32%_87%_/33%)]  rounded-lg px-[16px] py-[12px] md:py-[8px] relative  mt-5">
                  <label
                    className="absolute left-[12px] text-[#00000094] tracking-wider text-[14px] md:text-[15px] bg-white top-[-50%] transform translate-y-[50%] px-[.4rem]"
                    htmlFor="name"
                  >
                    Add-ins
                  </label>
                  <span className="absolute top-[-50%] right-[12px] bg-white text-[14px] text-[#00754a] font-semibold  px-[.4rem] transform translate-y-[50%]">
                    Customized
                  </span>
                  <select
                    className="w-full opacity-0 appearance-none absolute inset-0 h-full z-[1] outline-none"
                    name="name"
                    id="name"
                    onChange={handleChange}
                  >
                    <option value="Extra Water">Extra Water</option>
                    <option value="Light Water">Light Water</option>
                    <option value="No Water">No Water</option>
                    <option value="Water">Water</option>
                  </select>
                  <span className="flex justify-between">
                    <span className="md:text-[1.3rem]">{selectedVal}</span>
                    <svg
                      aria-hidden="true"
                      className="w-[24px] h-[24px] fill-[#00754a]"
                      focusable="false"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                      loading="lazy"
                    >
                      <path d="M11.4135 16.2678C11.5585 16.4158 11.7545 16.4998 11.9595 16.4998C12.1645 16.4998 12.3605 16.4158 12.5055 16.2678L17.7745 10.8538C18.0756 10.5438 18.0756 10.0418 17.7745 9.73175C17.4725 9.42275 16.9835 9.42275 16.6825 9.73175L11.9595 14.5848L7.31851 9.81675C7.0165 9.50675 6.5275 9.50675 6.2265 9.81675C5.9245 10.1268 5.9245 10.6288 6.2265 10.9388L11.4135 16.2678Z"></path>
                      <path d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21.5 12C21.5 6.75329 17.2467 2.5 12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5C17.2467 21.5 21.5 17.2467 21.5 12Z"></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="shadow-[0_0_0_1px_#00000094] focus-within:shadow-[0_0_0_2px_#00754a] focus-within:bg-[hsl(160_32%_87%_/33%)] rounded-lg px-[16px] py-[12px] md:py-[8px] relative  mt-8">
                <label
                  className="absolute left-[12px] text-[#00000094] tracking-wider text-[14px] md:text-[15px] bg-white top-[-50%] transform translate-y-[50%] px-[.4rem]"
                  htmlFor="name"
                >
                  Espresso & Shot Options
                </label>
                <span className="absolute top-[-50%] right-[12px] bg-white text-[14px] text-[#00754a] font-semibold  px-[.4rem] transform translate-y-[50%]">
                  Customized
                </span>
                <select
                  className="w-full opacity-0 appearance-none absolute inset-0 h-full z-[1] outline-none"
                  name="name"
                  id="name"
                  onChange={handleChange2}
                >
                  <option value="Signature Espresso">Signature Espresso</option>
                  <option value="Blone Espresso">Blone Espresso</option>
                  <option value="Decaf Espresso Roast">
                    Decaf Espresso Roast
                  </option>
                  <option value=" 1/3 Decaf"> 1/3 Decaf</option>
                  <option value=" 1/2 Decaf"> 1/2 Decaf</option>
                  <option value=" 2/3 Decaf"> 2/3 Decaf</option>
                </select>
                <span className="flex justify-between">
                  <span className="md:text-[1.3rem]">{selectedVal2}</span>
                  <svg
                    aria-hidden="true"
                    className="w-[24px] h-[24px] fill-[#00754a]"
                    focusable="false"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                    loading="lazy"
                  >
                    <path d="M11.4135 16.2678C11.5585 16.4158 11.7545 16.4998 11.9595 16.4998C12.1645 16.4998 12.3605 16.4158 12.5055 16.2678L17.7745 10.8538C18.0756 10.5438 18.0756 10.0418 17.7745 9.73175C17.4725 9.42275 16.9835 9.42275 16.6825 9.73175L11.9595 14.5848L7.31851 9.81675C7.0165 9.50675 6.5275 9.50675 6.2265 9.81675C5.9245 10.1268 5.9245 10.6288 6.2265 10.9388L11.4135 16.2678Z"></path>
                    <path d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21.5 12C21.5 6.75329 17.2467 2.5 12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5C17.2467 21.5 21.5 17.2467 21.5 12Z"></path>
                  </svg>
                </span>
              </div>
              <div>
                <div className="shadow-[0_0_0_1px_#00000094] rounded-lg px-[16px] py-[12px] md:py-[8px] relative  mt-8">
                  <label
                    className="absolute left-[12px] text-[#00000094] tracking-wider text-[14px] md:text-[15px]  bg-white top-[-50%] transform translate-y-[50%] px-[.4rem]"
                    htmlFor="name"
                  >
                    Espresso & Shot Options
                  </label>
                  <span className="absolute top-[-50%] right-[12px] bg-white text-[14px] text-[#00754a] font-semibold  px-[.4rem] transform translate-y-[50%]">
                    Customized
                  </span>
                  <div className="flex justify-between">
                    <p className="w-full md:text-[1.3rem]">Shots</p>
                    <div className="flex items-center">
                      <button onClick={() => setCount(Math.max(count - 1, 1))}>
                        {
                          <svg
                            aria-hidden="true"
                            className={`${
                              count === 1 ? "hidden" : "block"
                            } w-[24px] h-[24px] fill-[#00754a] `}
                            focusable="false"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                            loading="lazy"
                          >
                            <path d="M12 22.75c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25 1.25 6.063 1.25 12 6.063 22.75 12 22.75zm0-1.5c-5.11 0-9.25-4.14-9.25-9.25S6.89 2.75 12 2.75s9.25 4.14 9.25 9.25-4.14 9.25-9.25 9.25z"></path>
                            <path d="M7.58 12.75h9.266c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H7.58c-.414 0-.75.336-.75.75s.336.75.75.75z"></path>
                          </svg>
                        }
                      </button>
                      <span className="px-2">{count}</span>
                      <button onClick={() => setCount(count + 1)}>
                        <svg
                          aria-hidden="true"
                          className="w-[24px] h-[24px] fill-[#00754a]"
                          focusable="false"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                          loading="lazy"
                        >
                          <path d="M12 22.75c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25 1.25 6.063 1.25 12 6.063 22.75 12 22.75zm0-1.5c-5.11 0-9.25-4.14-9.25-9.25S6.89 2.75 12 2.75s9.25 4.14 9.25 9.25-4.14 9.25-9.25 9.25z"></path>
                          <path d="M11.214 11.25V7.366c0-.434.352-.786.786-.786.434 0 .786.352.786.786v3.884h3.86c.414 0 .75.336.75.75s-.336.75-.75.75h-3.86v3.882c0 .434-.352.786-.786.786-.434 0-.786-.352-.786-.786V12.75H7.38c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.834z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cusomize-button text-center lg:text-start">
                <button
                  onClick={() => handleCustomize(false)}
                  className="bg-[#1e3932] py-[16px] px-[32px] rounded-[500px] text-white mt-[2rem]"
                >
                  <span className="flex items-center font-bold text-[20px]">
                    <svg
                      aria-hidden="true"
                      className="w-[24px] h-[24px] fill-[#cba258] mr-2"
                      focusable="false"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                      loading="lazy"
                    >
                      <path d="M9.818 3.166a.55.55 0 0 0-.271.572l.914 5.377-4.908 2.895a.55.55 0 0 0 .174 1.013l5.587 1.112.913 5.377a.55.55 0 0 0 1.02.183l2.806-4.867 5.59.524a.55.55 0 0 0 .449-.928l-3.856-4.049 2.301-5.094a.55.55 0 0 0-.73-.726l-5.102 2.34-4.258-3.666a.55.55 0 0 0-.629-.063zm1.069 1.893 3.367 2.9a.55.55 0 0 0 .588.082l4.088-1.875-1.848 4.094a.55.55 0 0 0 .102.607l3.097 3.252-4.476-.42a.55.55 0 0 0-.53.274l-2.218 3.847-.723-4.244a.55.55 0 0 0-.434-.447l-4.545-.904 3.99-2.354a.55.55 0 0 0 .264-.566ZM17.375.848a.25.25 0 0 0-.25.148c-.247.566-.334.828-.395.893a.25.25 0 0 0-.005.006c-.03.034-.072.062-.186.113-.114.05-.288.117-.521.23a.25.25 0 0 0-.036.428c.21.151.368.247.471.316.103.07.139.102.162.141a.25.25 0 0 0 .004.008c.047.073.087.345.23.943a.25.25 0 0 0 .473.043c.248-.565.335-.827.395-.892a.25.25 0 0 0 .004-.006c.03-.035.073-.063.187-.114.114-.05.286-.118.52-.232a.25.25 0 0 0 .037-.428c-.21-.15-.368-.245-.47-.314-.104-.07-.142-.104-.165-.143a.25.25 0 0 0-.004-.006c-.047-.073-.087-.346-.23-.945a.25.25 0 0 0-.221-.19Zm-.086.972c.03.122.052.328.117.43.08.13.19.215.309.295.023.016.062.044.088.06a8.775 8.775 0 0 0-.098.043.988.988 0 0 0-.357.239c-.082.09-.138.29-.19.406-.03-.123-.051-.33-.117-.432a.974.974 0 0 0-.31-.295l-.088-.058.1-.045a.971.971 0 0 0 .357-.238c.081-.09.137-.29.19-.405zm.805 16.998a.25.25 0 0 0-.235.143c-.373.782-.477 1.131-.615 1.26a.25.25 0 0 0-.006.004c-.134.132-.479.212-1.265.54a.25.25 0 0 0-.016.456c.763.384 1.099.488 1.225.63a.25.25 0 0 0 .005.006c.13.139.21.494.53 1.301a.25.25 0 0 0 .457.016c.373-.782.477-1.132.615-1.26a.25.25 0 0 0 .006-.006c.134-.133.477-.213 1.264-.54a.25.25 0 0 0 .017-.454c-.762-.384-1.099-.488-1.224-.63a.25.25 0 0 0-.006-.007c-.13-.138-.21-.493-.53-1.3a.25.25 0 0 0-.222-.159Zm-.03.836c.121.358.227.76.415.961.186.21.573.348.925.502-.361.129-.757.237-.957.434-.2.187-.334.58-.478.928-.121-.36-.227-.762-.416-.963-.186-.209-.572-.345-.922-.498.36-.129.755-.24.955-.436.2-.187.334-.58.478-.928zM22.5 8.75a.754.754 0 0 0-.75.75c0 .411.339.75.75.75s.75-.339.75-.75a.754.754 0 0 0-.75-.75zm0 .5c.141 0 .25.109.25.25 0 .141-.109.25-.25.25a.246.246 0 0 1-.25-.25c0-.141.109-.25.25-.25zm-19 6.5a.75.75 0 0 1-.75.75.75.75 0 0 1-.75-.75.75.75 0 0 1 .75-.75.75.75 0 0 1 .75.75Zm1.5-10c-.687 0-1.25.563-1.25 1.25S4.313 8.25 5 8.25 6.25 7.687 6.25 7 5.687 5.75 5 5.75Zm0 .5c.417 0 .75.333.75.75s-.333.75-.75.75A.746.746 0 0 1 4.25 7c0-.417.333-.75.75-.75Zm5.746 7.771-8.41 8.41a.55.55 0 0 0 .777.78l8.328-8.328-.127-.748z"></path>
                    </svg>
                    Customize
                  </span>
                </button>
              </div>

              <div className="text-center lg:text-start pt-[3rem]">
                <button className="px-[16px] py-[7px] font-semibold border border-[#00754a] hover:bg-[#e5f1ec] text-[#00754a] rounded-full">
                  Reset to standard recipe
                </button>
              </div>
            </div>
          </div>
        ) : (
         <Customize handleCustomize={handleCustomize} />
        )}

        <div className="mt-[3rem] bg-[#1e3932]">
          <aside className="max-w-[420px] mx-auto lg:mx-[100px]">
            <div className="py-[40px] px-4">
              <p className="text-[#cba258] px-2 inline-block border border-[#cba258] rounded-md">
                <span>200</span>
                <span>★</span>
                item
              </p>
              <p className="text-[#ffffffb3] text-[14px] pt-[15px]">
                Espresso shots topped with hot water create a light layer of
                crema culminating in this wonderfully rich cup with depth and
                nuance.
              </p>
              <p className="text-white pt-[1rem]">
                {calory} calories, 0g sugar, 0g fat
              </p>
              <a
                className="text-white border inline-block border-white px-[16px] py-[7px] mt-[1.5rem] rounded-full text-[14px] font-semibold"
                href=""
              >
                Full nutrition & ingredients list
              </a>
            </div>
          </aside>
        </div>

        <div className="text-end z-[4]">
          <button className="bg-[#00754a] py-[10px] px-[1rem] text-[1.4rem] text-center fixed bottom-[110px] right-10 font-semibold rounded-full text-white shadow-[0_0_6px_#0000003d, 0_8px_12px_#00000024;]">
            Add to Order
          </button>
        </div>
        <Basket />
      </main>
    </>
  );
}

export default ProductDetails;
