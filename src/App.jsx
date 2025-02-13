import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./components/main/Main";
import Menu from "./components/main/Menu";
import Featured from "./components/main/Featured";
import Location from "./components/main/Location";
import Previous from "./components/main/Previous";
import Favorites from "./components/main/Favorites";
import Rewards from "./components/main/Rewards";
import GiftCards from "./components/main/GiftCards";
import ProductDetails from "./components/main/ProductDetails";
import AuthLayout from "./layouts/AuthLayout";
import SignUp from "./login/SignUp";
import SignIn from "./login/SignIn";
import Cart from "./components/cart/Cart";
import CartLayout from "./layouts/CartLayout";
import JoinTheApp from "./components/main/JoinTheApp";

function App() {
  return (
    <>
      <Routes future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:name/:subname" element={<Menu />} />
          <Route path="/menu/product/:id/:temp" element={<ProductDetails />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/previous" element={<Previous />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/joinapp" element={<JoinTheApp />} />
          <Route path="/gifts" element={<GiftCards />} />
          <Route path="/location" element={<Location />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        <Route element={<CartLayout />}>
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
