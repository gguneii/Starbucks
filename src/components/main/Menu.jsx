import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { DATA } from "../../context/DataContext";
import { Helmet } from "react-helmet";
import Basket from "./Basket";
import MenuLists from "./MenuLists";
import ScrollTo from "../../utils/ScrollTo";

function Menu() {
  const { data } = useContext(DATA);
  const { name, subname } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { pathname } = useLocation();
  ScrollTo(pathname, 0);
  useEffect(() => {
    if (data) {
      if (name && subname) {
        const category = data.find(
          (item) => item.name.toLowerCase() === name.toLowerCase()
        );
        if (category) {
          const subCategory = category.children.find(
            (child) => child.name.toLowerCase() === subname.toLowerCase()
          );
          setSelectedCategory(subCategory || category);
        }
      } else {
        setSelectedCategory(null);
      }
    }
  }, [name, subname, data, selectedCategory]);
  // console.log(selectedCategory);

  return (
    <>
      <Helmet>
        <title>Menu: Starbucks Coffee Company</title>
      </Helmet>
      <MenuLists />
      <div className="lg:max-w-[1500px] custom:pl-[115px] px-[1rem] mx-auto">
        <div className="pt-[2.2rem] flex lg:gap-[130px]">
          <div className="lg:w-[20%] lg:basis-[150px]">
            {data &&
              data.map((item, i) => (
                <div
                  key={i}
                  className="left-side lg:flex flex-col self-auto hidden"
                >
                  <h2 className="pb-[10px] mt-[10px] text-[1.2rem] font-semibold">
                    {item.name}
                  </h2>
                  <div>
                    {item.children.map((d, ind) => (
                      <Link
                        to={`/menu/${item.name.toLowerCase()}/${d.name.toLowerCase()}`}
                        key={ind}
                      >
                        <h3 className="lg:flex flex-col text-[#00000094] font-semibold flex-wrap py-2">
                          {d.name}
                        </h3>
                      </Link>
                    ))}
                  </div>
                </div>
              ))
              }
          </div>

          <div className="lg:w-[80%] w-full">
            <h1
              className={`${
                selectedCategory
                  ? "text-[#00000094] font-semibold text-[16px]"
                  : "text-[1.5rem] custom:text-[2rem] font-soDoSans pb-[1rem]"
              }`}
            >
              <Link
                to={selectedCategory ? "/menu" : "#"}
                className={`${selectedCategory ? "text-inherit" : ""}`}
              >
                Menu
              </Link>
              {selectedCategory && ` / ${selectedCategory.name}`}
            </h1>

            {selectedCategory === null ? (
              data &&
              data.map((item, i) => {
                return (
                  <section className="right-side" key={i} id={item.name}>
                    <h2 className="font-soDoSans text-[1.1rem] custom:text-[1.5rem] mt-5 lg:mt-6">
                      {item.name}
                    </h2>
                    <hr className="block my-[1rem]" />

                    <div className="flex flex-col custom:flex-row flex-wrap custom:gap-6">
                      {item.children.map((d, i) => {
                        return (
                          <Link
                            to={`/menu/${item.name.toLowerCase()}/${d.name.toLowerCase()}`}
                            key={i}
                            className="flex items-center custom:w-[300px] lg:w-[350px] xl:w-[400px] 2xl:w-[500px]"
                          >
                            <div className="max-w-[70px] w-full h-[70px] lg:max-w-[112px] lg:h-[112px] mr-3 mt-3 rounded-full overflow-hidden flex items-center justify-center">
                              <img
                                className="max-w-[165px] w-full h-[165px] lg:max-w-[200px] lg:h-[200px] object-cover object-center"
                                onError={(e) => {
                                  e.target.src = "/assets/errImg.webp";
                                }}
                                src={
                                  d?.children[0]
                                    ? d?.children[0]?.products[0]?.assets
                                        ?.masterImage?.uri
                                    : d?.products[0]?.assets?.masterImage?.uri
                                }
                                width="100%"
                                height="100%"
                                loading="lazy"
                                alt="coffee_img"
                              />
                            </div>
                            <h3 className="xl:text-[20px]">{d.name}</h3>
                          </Link>
                        );
                      })}
                    </div>
                  </section>
                );
              })
            ) : (
              <section className="right-side">
                <h2 className="font-soDoSans text-[1.3rem] custom:text-[1.5rem] lg:text-[2rem] tracking-wide mt-5">
                  {selectedCategory.name}
                </h2>
                <div
                  className={`flex ${
                    selectedCategory?.children?.length ||
                    selectedCategory?.products
                      ? "flex-col"
                      : "flex-row"
                  } flex-wrap custom:gap-6 w-full custom:max-w-[900px]`}
                >
                  {(selectedCategory?.children?.length
                    ? selectedCategory.children
                    : selectedCategory?.products
                  )?.map((d, i) => {
                    return (
                      <div key={i} className="flex w-full items-center">
                        <div className="xl:text-[20px] w-full">
                          <div className="font-soDoSans text-[1.1rem] custom:text-[1.5rem] mt-5 lg:mt-8">
                            {d.products ? d.name : ""}
                          </div>
                          <hr className="block w-full my-[1rem]" />
                          <div className="grid grid-cols-2 sm:grid-cols-3 custom:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 w-full">
                            {(d?.products || [d])?.map((p, j) => {
                              return (
                                <Link
                                  to={`/menu/product/${p.productNumber}/${p.formCode}`}
                                  key={j}
                                  className="w-[50%] justify-start flex flex-col mt-6 flex-wrap"
                                >
                                  <div className="w-[120px] mx-auto h-[120px] lg:w-[140px] lg:h-[140px] mt-3 rounded-full overflow-hidden flex items-center justify-center">
                                    <img
                                      onError={(e) => {
                                        e.target.src = "/assets/errImg.webp";
                                      }}
                                      className="scale-[2] w-full h-full lg:scale-[2.3] object-cover object-center"
                                      src={p?.assets?.masterImage?.uri}
                                      alt="coffee_img"
                                      width="100%"
                                      height="100%"
                                      loading="lazy"
                                    />
                                  </div>
                                  <h2 className="custom:text-[1rem] font-semibold mx-auto mt-4 lg:mt-6 text-center">
                                    {p.name}
                                  </h2>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
      <Basket />
    </>
  );
}

export default Menu;
