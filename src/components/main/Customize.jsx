import { useContext, useEffect, useState } from "react";
import { DATA } from "../../context/DataContext";

function Customize({ handleCustomize, size }) {
  const { details } = useContext(DATA);
  const [count, setCount] = useState(3);
  const [checked, setChecked] = useState(false);
  const [fields, setFields] = useState({});
  const [renderedFields, setRenderedFields] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedSpecialFields, setSelectedSpecialFields] = useState({});

  function rememberPass(e) {
    setChecked(e.target.checked);
  }

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    if (size === "Short") {
      setCount(2);
    } else if (size === "Tall") {
      setCount(3);
    } else if (size === "Grande") {
      setCount(4);
    } else if (size === "Venti") {
      setCount(5);
    } else if (size === "Trenta") {
      setCount(5);
    }
  }, [details, size]);

 
  const chooseOption = (index, fieldIndex, e) => {
    setFields((prevFields) => {
      const updatedFields = { ...prevFields };

      if (updatedFields[index]) {
        updatedFields[index] = updatedFields[index].map((field, idx) => {
          if (idx === fieldIndex) {
            return { ...field, selectedOption: e.target.value };
          }
          return field;
        });
      }

      return updatedFields;
    });
  };

  const handleOptionClick = (index, selectedProduct) => {
    const selectedName = selectedProduct.form?.name;

    setFields((prevFields) => {
      const updatedFields = { ...prevFields };

      updatedFields[index] = [
        ...(updatedFields[index]?.filter(
          (field) => field.label !== selectedName
        ) || []),
        {
          type: "select",
          label: selectedName,
          options: selectedProduct.form?.sizes || [],
          selectedOption: "",
        },
      ];

      return updatedFields;
    });

    setRenderedFields((prev) =>
      prev.filter(
        (field) => !(field.index === index && field.option === selectedName)
      )
    );
  };

  const handleCombinedChange = (e, index, child, hasSingleOption) => {
    if (hasSingleOption) {
      const singleProduct = child.products[0];
      const selectedSize =
        singleProduct.form?.sizes[e.target.selectedIndex]?.name || "";
      setSelectedOption(selectedSize);
      // console.log("Selected Size:", selectedSize);
    } else {
      const selectedProduct = child.products[e.target.selectedIndex];
      const selectedName = selectedProduct?.form?.name || "";
      handleOptionClick(index, selectedProduct);
      setSelectedOption(selectedName);
      // console.log("Selected Name:", selectedName);
    }
  };

  const specialChildNames = ["Chai Teas", "Espresso Shots", "Other", "Liquid Sweeteners"];
  const isSpecialChild = (name) => specialChildNames.includes(name);

  return (
    <>
      <button
        onClick={() => handleCustomize(true)}
        className="flex items-center text-[20px] font-semibold my-8 ml-16"
      >
        <svg
          aria-hidden="true"
          className="W-[24px] h-[24px] "
          focusable="false"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
          loading="lazy"
        >
          <path d="M15.098 5.78c.292-.293.292-.767 0-1.06-.293-.293-.768-.293-1.06 0L7.62 11.137c-.293.293-.293.768 0 1.06l6.52 6.52c.292.293.767.293 1.06 0 .293-.293.293-.768 0-1.06l-5.99-5.99L15.1 5.78z"></path>
        </svg>
        Done Customizing
      </button>
      <div className="Customizee flex justify-center px-3 lg:max-w-[1250px] mx-auto">
        {details?.productOptions && (
          <>
            <div className="left-sided flex flex-wrap justify-center w-full lg:mr-[40px] gap-20">
              {details.productOptions.map((item, index) => {
                return (
                  <div className="max-w-[440px] w-full" key={index}>
                    <h2 className="font-semibold text-[1.2rem] pb-[1rem] px-2 md:text-[1.7rem] border-b-[4px] border-[#d4e9e2]">
                      {item.name}
                    </h2>
                    <div className="products">
                      {item.children.map((child, idx) => {
                        const hasSingleOption = child.products.length === 1;
                        const isEmpty = child.products.length === 0;

                        if (isEmpty) return null;                        
                          
                        return (
                          <div
                            className=""
                            key={idx}
                          >

                            {child.name === "Chai Teas" ||
                            child.name === "Espresso Shots" ||
                            child.name === "Other" ||
                            child.name === "Liquid Sweeteners" ? (
                              // Input field for "chai" or "shots"
                              <div className="flex w-full py-1 mt-8 shadow-[0_0_0_1px_#00000094] focus-within:shadow-[0_0_0_2px_#00754a] focus-within:bg-[hsl(160_32%_87%_/33%)]  rounded-lg overflow-hidden justify-between">
                              <div>
                                <input
                                  type="text"
                                  className="w-full md:text-[1.2rem] focus-within:shadow-[0_0_0_2px_#00754a] focus-within:bg-[hsl(160_32%_87%_/33%)]  outline-none px-[16px] py-[12px] md:py-[8px]"
                                  readOnly
                                  value={`Add ${child.products[0].form.name}`}
                                />
                              </div>
                              {child.name ==="Other" ? (
                                <div className="relative flex items-center px-3">
                                <label htmlFor="remember"></label>
                                <input
                                  onChange={rememberPass}
                                  className="border-0 opacity-0 overflow-hidden absolute w-[22px] h-[22px] right-3 top-3 cursor-pointer"
                                  type="checkbox"
                                  name=""
                                  id="remember"
                                />
                                <span>
                                  <svg
                                    aria-hidden="true"
                                    className={`w-[24px] h-[24px] border rounded-lg border-[#00754a] ${
                                      checked ? "bg-[#00754a] fill-white" : "fill-none"
                                    }`}
                                    focusable="false"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 24 24"
                                    loading="lazy"
                                  >
                                    <path d="M4.29 12.104c-.277-.308-.75-.332-1.06-.054-.306.278-.33.752-.053 1.06l4.485 4.963c.29.322.795.33 1.096.017L20.414 6.003c.288-.298.28-.773-.02-1.06-.297-.288-.772-.28-1.06.02L8.237 16.47 4.29 12.105z"></path>
                                  </svg>
                                </span>
                                
                              </div>
                              ) :(
                                <div className="flex items-center px-4">
                                <button
                                
                                >
                                  {
                                    <svg
                                      aria-hidden="true"
                                      className={` w-[24px] h-[24px] fill-[#00754a] `}
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
                                <span className="px-2">1</span>
                                <button>
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
                              )}
                            </div>
                            ) : (
                              // Default select dropdown
                              <div className="bg-[#f9f9f9] shadow-[inset_0_1px_4px_#0000001a] focus-within:shadow-[0_0_0_2px_#00754a] focus-within:bg-[hsl(160_32%_87%_/33%)] rounded-lg px-[16px] py-[12px] md:py-[8px] relative mt-8">
                                <select
                                onChange={(e) =>
                                  handleCombinedChange(
                                    e,
                                    index,
                                    child,
                                    hasSingleOption
                                  )
                                }
                                className="w-full opacity-0 appearance-none absolute inset-0 h-full outline-none"
                                name="name"
                                id="name"
                                value={selectedOption}
                              >
                                {hasSingleOption &&
                                  child.products[0]?.form?.sizes?.map(
                                    (item, i) => (
                                      <option key={i} value={item.name}>
                                        {item.name}
                                      </option>
                                    )
                                  )}

                                {!hasSingleOption &&
                                  child.products.map((p, id) =>
                                    p.form ? (
                                      <option value={p.form.name} key={id}>
                                        {p.form.name}
                                      </option>
                                    ) : null
                                  )}
                              </select>

                              <span className="flex justify-between">
                              <span className="md:text-[1.3rem]">
                                {hasSingleOption
                                  ? child.products[0].form.name
                                  : `Add ${child.name}`}
                              </span>
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
                            )}
                           
                          </div>
                        );
                      })}

                      {fields[index] &&
                        fields[index].map((field, fieldIndex) => {
                          const { options = [] } = field;
                                            console.log(item.name );
                                            
                            const isSpecialField = [
                              "Espresso & Shot Options",
                              "Sweeteners",
                            ].includes(item.name);

                            
                          return (
                            <div key={fieldIndex} className="my-4">
                              {options.length > 2 || isSpecialField ? (
                                <div className="shadow-[0_0_0_1px_#00000094]  focus-within:shadow-[0_0_0_2px_#00754a] focus-within:bg-[hsl(160_32%_87%_/33%)] rounded-lg px-[16px] py-[12px] md:py-[8px] relative mt-8">
                                  <select
                                    onChange={(e) =>
                                      chooseOption(index, fieldIndex, e)
                                    }
                                    className="w-full opacity-0 appearance-none absolute inset-0 h-full outline-none"
                                    name="name"
                                    id="name"
                                    value={field.selectedOption || ""}
                                  >
                                    {options.map((opt, optIdx) => (
                                      <option key={optIdx} value={opt.name}>
                                        {opt.name}
                                      </option>
                                    ))}
                                  </select>
                                  <span className="flex justify-between">
                                    <span className="md:text-[1.2rem]">
                                      {field.selectedOption || field.label}
                                    </span>
                                    <svg
                                      aria-hidden="true"
                                      className="w-[24px] h-[24px] fill-[#00754a]"
                                      focusable="false"
                                      preserveAspectRatio="xMidYMid meet"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM11.4135 16.2678L6.2265 10.9388C5.9245 10.6288 5.9245 10.1268 6.2265 9.81675C6.5275 9.50675 7.0165 9.50675 7.31851 9.81675L11.9595 14.5848L16.6825 9.73175C16.9835 9.42275 17.4725 9.42275 17.7745 9.73175C18.0756 10.0418 18.0756 10.5438 17.7745 10.8538L12.5055 16.2678C12.3605 16.4158 12.1645 16.4998 11.9595 16.4998C11.7545 16.4998 11.5585 16.4158 11.4135 16.2678Z"></path>
                                    </svg>
                                  </span>
                                </div>

                              ) : (
                                <div className="flex w-full py-1 shadow-[0_0_0_1px_#00000094] focus-within:shadow-[0_0_0_2px_#00754a] focus-within:bg-[hsl(160_32%_87%_/33%)]  rounded-lg overflow-hidden justify-between">
                                  <div>
                                    <input
                                      type="text"
                                      className="w-full md:text-[1.2rem] focus-within:shadow-[0_0_0_2px_#00754a] focus-within:bg-[hsl(160_32%_87%_/33%)]  outline-none px-[16px] py-[12px] md:py-[8px]"
                                      placeholder="Enter option"
                                      value={options[0]?.name || ""}
                                      readOnly
                                    />
                                  </div>
                                  <div className="flex items-center px-4">
                                    <button
                                      onClick={() =>
                                        setCount(Math.max(count - 1, 1))
                                      }
                                    >
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
                              )}
                            </div>
                          );
                        })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Sağ tərəf */}
            {/* <div className="right-sided flex justify-center items-center flex-col lg:w-1/2 gap-6">
            {details.productOptions.map((item, index) => {
                return index > 3 ? (
                  <div className="max-w-[400px] w-full" key={index}>
                    <h2 className="font-semibold text-[1.2rem] pb-[1rem] px-2 md:text-[1.7rem] border-b-[4px] border-[#d4e9e2]">
                      {item.name}
                    </h2>
                    <div className="products">
                      {item.children.map((child, idx) => (
                        <div
                          className="bg-[#f9f9f9] shadow-[inset_0_1px_4px_#0000001a] focus-within:shadow-[0_0_0_2px_#00754a] focus-within:bg-[hsl(160_32%_87%_/33%)] rounded-lg px-[16px] py-[12px] md:py-[8px] relative mt-8"
                          key={idx}
                        >
                          <select
                            onChange={(e) =>
                              handleOptionClick(
                                index,
                                child.products[e.target.selectedIndex]
                              )
                            }
                            className="w-full opacity-0 appearance-none absolute inset-0 h-full outline-none"
                            name="name"
                            id="name"
                          >
                            {child.products.map((p, id) => {
                              // console.log("child", child);

                              // console.log("p:", p.form.sizes);

                              return (
                                <option
                                  value={p.form.name}
                                  key={id}
                                >
                                  {p.form.name}
                                </option>
                              );
                            })}
                          </select>
                          <span className="flex justify-between">
                            <span className="md:text-[1.3rem]">
                              Add {child.name}
                            </span>
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
                      ))}

                      {fields[index] &&
                        fields[index].map((field, fieldIndex) => {
                          const { options } = field;
                            console.log(field);
                            
                          return (
                            <div key={fieldIndex} className="my-4">
                              {options.length > 2 ? (
                                <div className="shadow-[0_0_0_1px_#00000094]  focus-within:shadow-[0_0_0_2px_#00754a] focus-within:bg-[hsl(160_32%_87%_/33%)] rounded-lg px-[16px] py-[12px] md:py-[8px] relative mt-8">
                                  <select
                                    className="w-full opacity-0 appearance-none absolute inset-0 h-full outline-none"
                                    name="name"
                                    id="name"
                                  >
                                    {options.map((opt, optIdx) => (
                                      <option key={optIdx} value={opt.name}>
                                        {opt.name}
                                      </option>
                                    ))}
                                  </select>
                                  <span className="flex justify-between">
                                    <span className="md:text-[1.3rem]">
                                     {field.label}
                                    </span>
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
                              ) : (
                                <input
                                  type="text"
                                  className="w-full shadow-[0_0_0_1px_#00000094]  focus-within:shadow-[0_0_0_2px_#00754a] focus-within:bg-[hsl(160_32%_87%_/33%)] outline-none rounded-lg px-[16px] py-[12px] md:py-[8px] relative  border"
                                  placeholder="Enter option"
                                  value={options[0]?.name || ""}
                                  readOnly
                                />
                              )}
                            </div>
                          );
                        })}
                    </div>
                  </div>
                ) : null;
              })}
            </div> */}
          </>
        )}
      </div>

      <div className="customize-button text-center">
        <button
          onClick={() => handleCustomize(true)}
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
            Done Customizing
          </span>
        </button>
      </div>

      {/* <div className="Customizee flex flex-wrap justify-center max-w-[1000px] mx-auto gap-20">
              {details?.productOptions &&
                details?.productOptions.map((item, i) => {
                  return (
                    <div className="max-w-[400px] w-full">
                      <h2 className="font-semibold text-[1.2rem]  pb-[1rem] px-2 md:text-[1.7rem] border-b-[4px] border-[#d4e9e2]">
                        {item.name}
                      </h2>
                      <div className="">
                        {item.children.map((child) => {
                          return (
                            <>
                              <div className="bg-[#f9f9f9] shadow-[inset_0_1px_4px_#0000001a] focus-within:shadow-[0_0_0_2px_#00754a] focus-within:bg-[hsl(160_32%_87%_/33%)] rounded-lg px-[16px] py-[12px] md:py-[8px] relative  mt-8">
                                <select
                                  className="w-full opacity-0 appearance-none absolute inset-0 h-full outline-none"
                                  name="name"
                                  id="name"
                                >
                                  {child.products.map((p) => {
                                    return (
                                      <option value=" 2/3 Decaf">
                                        {p.form.name}
                                      </option>
                                    );
                                  })}
                                </select>
                                <span className="flex justify-between">
                                  <span className="md:text-[1.3rem]">
                                    Add {child.name}
                                  </span>

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
                            </>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
            </div> */}
    </>
  );
}

export default Customize;
