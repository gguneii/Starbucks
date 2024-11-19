import { Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Main from "./components/main/Main"
import Menu from "./components/main/Menu"
import { Helmet } from "react-helmet"
import Featured from "./components/main/Featured"

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
        <Route path="/featured" element={<Featured />} />
      </Route>
    </Routes>
    </>
  )
}

export default App