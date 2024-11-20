import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { DATA } from "../../context/DataContext";
import { Helmet } from "react-helmet";
import Basket from "./Basket";
import CoffeeAnimation from "../CoffeeAnimation";
import MenuLists from "./MenuLists";

function Menu() {
  const { data } = useContext(DATA);
  const { name, subname } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(null);

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
  }, [name, subname, data]);
  console.log(selectedCategory);

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
                <div key={i} className="left-side lg:flex flex-col self-auto hidden">
                  <h2 className="pb-[10px] mt-[10px] text-[1.2rem] font-semibold">
                    {item.name}
                  </h2>
                  <div>
                    {item.children.map((d, ind) => (
                      <Link to={`/menu/${item.name.toLowerCase()}/${d.name.toLowerCase()}`} key={ind}>
                        <h3 className="lg:flex flex-col text-[#00000094] font-semibold flex-wrap py-2">
                          {d.name}
                        </h3>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          <div className="lg:w-[80%] w-full">
            <h1 className="pb-[1rem] text-[1.5rem] custom:text-[2rem] font-soDoSans">
              Menu
            </h1>
            {selectedCategory === null ? (
              data ? (
                data.map((item, i) => {
                  return (
                    <section className="right-side" key={i} id={item.name}>
                      <h2 className="font-soDoSans text-[1.1rem] custom:text-[1.5rem] mt-5 lg:mt-8">
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
                              <div className="max-w-[70px] h-[70px] lg:max-w-[112px] lg:h-[112px] mr-3 mt-3 rounded-full overflow-hidden flex items-center justify-center">
                                <img
                                  className="max-w-[165px w-full] h-[165px] lg:max-w-[200px] lg:h-[200px] object-cover object-center"
                                  src={
                                    d?.children[0]
                                      ? d?.children[0]?.products[0]?.assets
                                          ?.masterImage?.uri
                                      : d?.products[0]?.assets?.masterImage?.uri
                                  }
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
                <CoffeeAnimation />
              )
            ) : (
              <section className="right-side">
                <h2 className="font-soDoSans text-[1.1rem] custom:text-[1.5rem] mt-5 lg:mt-8">
                  {selectedCategory.name}
                </h2>
                <hr className="block my-[1rem]" />

                <div className="flex flex-col custom:flex-row flex-wrap custom:gap-6">
                  {(selectedCategory?.children?.length
                    ? selectedCategory.children 
                    : selectedCategory?.products
                  ) 
                    ?.map((d, i) => (
                      <Link
                        // to={`/menu/${selectedCategory.name}/${d.name}`}
                        key={i}
                        className="flex items-center custom:w-[300px] lg:w-[350px] xl:w-[400px] 2xl:w-[500px]"
                      >
                        <div className="max-w-[70px] h-[70px] lg:max-w-[112px] lg:h-[112px] mr-3 mt-3 rounded-full overflow-hidden flex items-center justify-center">
                          <img
                            className="max-w-[165px] w-full h-[165px] lg:max-w-[200px] lg:h-[200px] object-cover object-center"
                            src={
                              d?.children?.[0]?.products?.[0]?.assets
                                ?.masterImage?.uri ||
                              d?.products?.[0]?.assets?.masterImage?.uri 
                            }
                            alt="coffee_img"
                          />
                        </div>
                        <h3 className="xl:text-[20px]">{d.name}</h3>
                      </Link>
                    ))}
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
