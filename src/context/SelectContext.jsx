import { createContext, useEffect, useState } from "react";

export const SELECTCONTEXT = createContext(null);

function SelectContext({ children }) {
  const [idState, setIdState] = useState(0);
  const [fields, setFields] = useState({});
  const [selectedOption, setSelectedOption] = useState("");
  const [sizeOptions, setSizeOptions] = useState([]);
  const [isCustomized, setIsCustomized] = useState({});
  const [countChai, setCountChai] = useState(null);
  const [countSweet, setCountSweet] = useState(null);
  const [countInp, setCountInp] = useState([]);
  const [checked, setChecked] = useState(false);
  const [allEvents, setAllEvents] = useState({});

  const initialState = {
    allEvents:{},
    fields: {},
    selectedOption: "",
    sizeOptions: [],
    isCustomized: {},
    countChai: null,
    countSweet: null,
    countInp: [],
    checked: false,
  };

  // Load data from localStorage when `idState` changes
  useEffect(() => {
    const allData = JSON.parse(localStorage.getItem("allEvents")) || {};
    if (allData[idState]) {
      const currentData = allData[idState];
      setFields(currentData.fields || {});
      setSelectedOption(currentData.selectedOption || "");
      setSizeOptions(currentData.sizeOptions || []);
      setIsCustomized(currentData.isCustomized || {});
      setCountChai(currentData.countChai || null);
      setCountSweet(currentData.countSweet || null);
      setCountInp(currentData.countInp || []);
      setChecked(currentData.checked || false);
    } else {
      reset(); // Reset if no data for the given `idState`
    }
  }, [idState]);

  // Update localStorage whenever any state changes for the current `idState`
  useEffect(() => {
    const allData = JSON.parse(localStorage.getItem("allEvents")) || {};
    allData[idState] = {
      fields,
      selectedOption,
      sizeOptions,
      isCustomized,
      countChai,
      countSweet,
      countInp,
      checked,
    };
    localStorage.setItem("allEvents", JSON.stringify(allData));
  }, [
    idState,
    fields,
    selectedOption,
    sizeOptions,
    isCustomized,
    countChai,
    countSweet,
    countInp,
    checked,
  ]);

  // Reset the state to initial values
  const reset = () => {
    setFields(initialState.fields);
    setSelectedOption(initialState.selectedOption);
    setSizeOptions(initialState.sizeOptions);
    setIsCustomized(initialState.isCustomized);
    setCountChai(initialState.countChai);
    setCountSweet(initialState.countSweet);
    setCountInp(initialState.countInp);
    setChecked(initialState.checked);
    setAllEvents(initialState.allEvents)
  };

  return (
    <SELECTCONTEXT.Provider
      value={{
        allEvents,
        setAllEvents,
        fields,
        setFields,
        selectedOption,
        setSelectedOption,
        sizeOptions,
        setSizeOptions,
        isCustomized,
        setIsCustomized,
        countChai,
        setCountChai,
        countSweet,
        setCountSweet,
        countInp,
        setCountInp,
        checked,
        setChecked,
        idState,
        setIdState,
        reset,
      }}
    >
      {children}
    </SELECTCONTEXT.Provider>
  );
}

export default SelectContext;
