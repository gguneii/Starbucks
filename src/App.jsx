import { Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Main from "./components/Main/Main"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route />
        <Route />
      </Route>
    </Routes>
    </>
  )
}

export default App