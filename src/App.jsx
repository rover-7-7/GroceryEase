import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductPage from "./Pages/Product/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:proid" element={<ProductPage/>} />
        <Route
          path="/*"
          element={
            <div>
              <h1>404 NOT Found</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
