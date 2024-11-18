import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { DATA } from "../../context/DataContext";

function Menu() {
  const { data } = useContext(DATA);
  //   console.log(data);

  return (
    <>
      <nav className="bg-[#f9f9f9] custom:px-[110px] px-[1rem]">
        <ul className="flex gap-3 w-full border-y py-1 ">
          <li>
            <NavLink className="inline-block pb-2 my-[.6rem] border-b border-black text-[#000000de] text-[14px] font-semibold">
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink className="inline-block pb-2 my-[.6rem] text-[#000000de] text-[14px] font-semibold">
              Featured
            </NavLink>
          </li>
          <li>
            <NavLink className="inline-block pb-2 my-[.6rem] text-[#000000de] text-[14px] font-semibold">
              Previous
            </NavLink>
          </li>
          <li>
            <NavLink className="inline-block pb-2 my-[.6rem] text-[#000000de] text-[14px] font-semibold">
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="lg:max-w-[1480px] custom:pl-[110px] px-[1rem] mx-auto ">
        <div className="pt-[2.2rem] flex lg:gap-[130px]">
          <div className="lg:w-[20%] lg:basis-[150px]">
            {data &&
              data.map((item, i) => (
                <div key={i} className="left-side lg:flex flex-col self-auto hidden ">
                  <h2 className="pb-[10px] mt-[10px] text-[1.2rem] font-semibold">
                    {item.name}
                  </h2>
                  <div>
                    {item.children.map((d, ind) => (
                      <Link key={ind}>
                        <h3 className="lg:flex flex-col text-[#00000094] font-semibold flex-wrap hidden py-2">
                          {d.name}
                        </h3>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          <div className="lg:w-[80%] w-full">
          <h1 className="pb-[1rem] text-[1.5rem] custom:text-[2rem] font-soDoSans">Menu</h1>
          {data &&
            data.map((item, i) => {
              return ( 
                  <section
                    className="right-side"
                    key={i}
                    id={item.name}
                  >
                    <h2 className="font-soDoSans text-[1.1rem] custom:text-[1.5rem] mt-5 lg:mt-8">
                      {item.name}
                    </h2>
                    <hr className="block my-[1rem]" />

                    <div className="flex flex-col custom:flex-row flex-wrap custom:gap-6">
                      {item.children.map((d, i) => {
                        return (
                            <Link
                              key={i}
                              className="flex items-center custom:w-[300px] lg:w-[350px] xl:w-[400px] 2xl:w-[500px]"
                            >
                              <div className="w-[70px] h-[70px] lg:w-[112px] lg:h-[112px] mr-3 mt-3 rounded-full overflow-hidden flex items-center justify-center">
                                <img
                                  className="w-[165px] h-[165px] lg:w-[200px] lg:h-[200px] object-cover object-center"
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
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
