import { createContext, useEffect, useState } from "react"

export const SELECTCONTEXT = createContext(null)
function SelectContext({children}) {
  const [fields, setFields] = useState({});
  const [selectedOption, setSelectedOption] = useState("");
  const [sizeOptions, setSizeOptions] = useState([]);
  const [isCustomized, setIsCustomized] = useState({})
  const [countChai, setCountChai] = useState(null);
  const [countSweet, setCountSweet] = useState(null);
  const [countInp, setCountInp] = useState([]);
  const [checked, setChecked] = useState(false);

  const [allEvents, setAllEvents] = useState(() => {
    const stored = localStorage.getItem("allEvents");
    return stored ? JSON.parse(stored) : {};
  });

  // `localStorage`-dən məlumatları oxumaq
  useEffect(() => {
    const savedFields = JSON.parse(localStorage.getItem('fields')) || {};
    const savedSelectedOption = localStorage.getItem('selectedOption') || "";
    const savedSizeOptions = JSON.parse(localStorage.getItem('sizeOptions')) || [];
    const savedCustomized = JSON.parse(localStorage.getItem('isCustomized')) || {};
    const storedChai = JSON.parse(localStorage.getItem("countChai"));
    const storedSweet = JSON.parse(localStorage.getItem("countSweet"));
    const storedInp = JSON.parse(localStorage.getItem("countInp"));
    const storedChecked = JSON.parse(localStorage.getItem("checked"));

    // const storedEvents = JSON.parse(localStorage.getItem("allEvents"))

    setFields(savedFields);
    setSelectedOption(savedSelectedOption);
    setSizeOptions(savedSizeOptions);
    setIsCustomized(savedCustomized)

    // setAllEvents(storedEvents)

    if (storedChai !== null) setCountChai(storedChai);
    if (storedSweet !== null) setCountSweet(storedSweet);
    if (storedInp) setCountInp(storedInp);
    if (storedChecked !== null) setChecked(storedChecked); // LocalStorage-dəki dəyəri state-ə yükləyirik
    
  }, []);

  // `localStorage`-ə məlumatları yazmaq
  useEffect(() => {
    if (fields) {
      localStorage.setItem('fields', JSON.stringify(fields));
    }
    if (selectedOption) {
      localStorage.setItem('selectedOption', selectedOption);
    }
    if (sizeOptions) {
      localStorage.setItem('sizeOptions', JSON.stringify(sizeOptions));
    }
    if(isCustomized){
      localStorage.setItem('isCustomized', JSON.stringify(isCustomized));
    }
    if (countChai !== null) {
      localStorage.setItem("countChai", JSON.stringify(countChai));
    }
    if (countSweet !== null) {
      localStorage.setItem("countSweet", JSON.stringify(countSweet));
    }
    if (countInp.length > 0) localStorage.setItem("countInp", JSON.stringify(countInp));
  
     localStorage.setItem("checked", JSON.stringify(checked));

     if(setAllEvents) localStorage.setItem("allEvents", JSON.stringify(allEvents))


  }, [fields, selectedOption, sizeOptions, isCustomized, countChai, countSweet, countInp, checked, allEvents]);
  
  return (
    <SELECTCONTEXT.Provider value={{fields, setFields, selectedOption, setSelectedOption, sizeOptions, setSizeOptions,isCustomized, setIsCustomized, countChai, setCountChai,
       countSweet, setCountSweet, countInp, setCountInp, checked, setChecked, allEvents, setAllEvents}}>
        {children}
    </SELECTCONTEXT.Provider>
  )
}

export default SelectContext