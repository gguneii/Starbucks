import { createContext, useEffect, useState } from "react"
import { getAllDetails, getAllMenus } from "../services/api"

export const DATA = createContext(null)
function DataContext({children}) {
    const [data, setData] = useState(null)
    const [details, setDetails] = useState(null)
    useEffect(()=>{
      getAllMenus().then(res => setData(res) )
      getAllDetails().then(res => setDetails(res) )
    },[])

  return (
    <DATA.Provider value={{data, details}}>
        {children}
    </DATA.Provider>
  )
}

export default DataContext