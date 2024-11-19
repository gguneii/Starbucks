import { createContext, useEffect, useState } from "react"
import { getAllMenus } from "../services/api"

export const DATA = createContext(null)
function DataContext({children}) {
    const [data, setData] = useState(null)
    // const [product, setProduct] = useState(null)
    useEffect(()=>{
      getAllMenus().then(res => setData(res) )
      // getProductById().then(res => setProduct(res))
    },[])

  return (
    <DATA.Provider value={{data}}>
        {children}
    </DATA.Provider>
  )
}

export default DataContext