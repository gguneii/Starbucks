import { useContext, useEffect } from "react";
import { DATA } from "../../context/DataContext";

function Customize() {

const { details } = useContext(DATA)
useEffect(() =>{
    
},[details])
//   console.log(details.productOptions);

  return (
    <div className="flex flex-wrap justify-center max-w-[1000px] mx-auto gap-20">
      {details?.productOptions &&
        details?.productOptions.map((item, i) => {                        
          return (
            <div className="max-w-[400px] w-full">
              <h2 className="font-semibold text-[1.2rem]  pb-[1rem] px-2 md:text-[1.7rem] border-b-[4px] border-[#d4e9e2]">
                {item.name}
              </h2>
              <div className="">
              {
                    item.children.map((child) =>{
                        console.log(child);
                        
                        return (
                            <div className="shadow-[0_0_0_1px_#00000094] focus-within:shadow-[0_0_0_2px_#00754a] focus-within:bg-[hsl(160_32%_87%_/33%)] rounded-lg px-[16px] py-[12px] md:py-[8px] relative  mt-8">
                            {/* <label
                              className="absolute left-[12px] text-[#00000094] tracking-wider text-[14px] md:text-[15px] bg-white top-[-50%] transform translate-y-[50%] px-[.4rem]"
                              htmlFor="name"
                            >
                              Espresso & Shot Options
                            </label> */}
                            <span className="absolute top-[-50%] right-[12px] bg-white text-[14px] text-[#00754a] font-semibold  px-[.4rem] transform translate-y-[50%] z-[1]">
                              Customized
                            </span>
                            <select
                              className="w-full opacity-0 appearance-none absolute inset-0 h-full z-[1] outline-none"
                              name="name"
                              id="name"
                              //   onChange={handleChange2}
                            >
                           
            
                            </select>
                            <span className="flex justify-between">
                              {
                                child &&
                                child?.map((n,i) =>{
                                    return (
                                        <span className="md:text-[1.3rem]">Add {n.name}</span>
                                    )
                                })
                              }
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
                        )
                    })
                }
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Customize;
