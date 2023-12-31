import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import About from "./pages/About";
import Cart from "./pages/Cart";
import RestaurantMenu from "./pages/RestaurantMenu";
import AuthContext from "./context/AuthContext";
import { useState } from "react";
import SignIn from "./pages/SignIn";
import Footer from "./components/Footer";
import OrderComplete from "./pages/OrderComplete";
// toast
import { ToastContainer } from "react-toastify";

function App() {
  const [user, setUser] = useState("");

  const users = {
    name: user,
    updateUser: setUser,
  };

  return (
    <>
      <AuthContext.Provider value={users}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order-complete" element={<OrderComplete />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthContext.Provider>
      <ToastContainer />
    </>
  );
}

export default App;
