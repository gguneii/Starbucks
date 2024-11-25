import { Route, Routes, useLocation } from "react-router-dom"
import Layout from "./layouts/Layout"
import Main from "./components/main/Main"
import Menu from "./components/main/Menu"
import { Helmet } from "react-helmet"
import Featured from "./components/main/Featured"
import Location from "./components/main/Location"
import Previous from "./components/main/Previous"
import Favorites from "./components/main/Favorites"
import Rewards from "./components/main/Rewards"
import GiftCards from "./components/main/GiftCards"
import { useEffect } from "react"
import ProductDetails from "./components/main/ProductDetails"

function App() {

  return (
    <>
    <Helmet>
      <title>Starbucks Coffee Company</title>
    </Helmet>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:name/:subname" element={<Menu />} />
        <Route path="/menu/product" element={<ProductDetails />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/previous" element={<Previous />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/gifts" element={<GiftCards />} />
        <Route path="/location" element={<Location />} />
      </Route>
    </Routes>
    </>
  )
}

export default App