import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import BannerSlider from "../../Components/Banners/BannerSlider";
import HomeCategories from "../../Components/Category/HomeCategories";
import Product_Sidebar from "../../Components/Product/Product_Sidebar";
import FooterFirst from "../../Components/Footer/FooterFirst";
import FooterSecond from "../../Components/Footer/FooterSecond";

function Home() {
  return (
    <div>
      <Navbar />
      <BannerSlider />
      <HomeCategories />
      <Product_Sidebar />
      <FooterFirst />
      <FooterSecond />
    </div>
  );
}

export default Home;
