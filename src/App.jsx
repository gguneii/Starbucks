import { Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Main from "./components/main/Main"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
    </>
  )
}

export default App