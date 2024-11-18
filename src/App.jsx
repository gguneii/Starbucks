import { Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Main from "./components/main/Main"
import Menu from "./components/main/Menu"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/menu" element={<Menu />} />
      </Route>
    </Routes>
    </>
  )
}

export default App