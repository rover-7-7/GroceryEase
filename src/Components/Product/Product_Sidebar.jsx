import React from "react";
import "./Product_Sidebar.css";
import CategorySidebar from "./CategorySidebar";
import AllProduct from "./AllProduct";

const Product_Sidebar = () => {
  return <div className="product_sidebar">
    <CategorySidebar/>
    <AllProduct/>
  </div>;
};

export default Product_Sidebar;
