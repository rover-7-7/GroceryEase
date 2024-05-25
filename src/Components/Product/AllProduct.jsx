import React from "react";
import "./AllProduct.css";
import ProductCard from "./ProductCard";
import img1 from "../../assets/Images/1.png";
import img2 from "../../assets/Images/2.png";
import img3 from "../../assets/Images/3.png";
import img4 from "../../assets/Images/4.png";

const AllProduct = () => {
  const products = [
    {
      id: 1,
      productimage: img1,
      productname: "Fresh Milk",
      productprice: 100,
      counttype: "1 each",
      discountprecent: 12,
    },
    {
      id: 2,
      productimage: img2,
      productname: "Dairy  Products",
      productprice: 200,
      counttype: "1 each",
      discountprecent: 12,
    },
    {
      id: 3,
      productimage: img3,
      productname: "Vegetables",
      productprice: 300,
      counttype: "1 per kg",
      discountprecent: 19,
    },
    {
      id: 4,
      productimage: img4,
      productname: "Meat Products",
      productprice: 400,
      counttype: "1 per kg",
      discountprecent: 12,
    },
    {
      id: 5,
      productimage: img1,
      productname: "Cow Milk",
      productprice: 100,
      counttype: "1 each",
      discountprecent: 12,
    },
    {
      id: 6,
      productimage: img2,
      productname: "Cheese",
      productprice: 200,
      counttype: "1 each",
      discountprecent: 12,
    },
    {
      id: 7,
      productimage: img3,
      productname: "Green Veggies",
      productprice: 300,
      counttype: "1 per kg",
      discountprecent: 19,
    },
    {
      id: 8,
      productimage: img4,
      productname: "Mutton",
      productprice: 400,
      counttype: "1 per kg",
      discountprecent: 12,
    },
    {
      id: 9,
      productimage: img1,
      productname: "Soaps",
      productprice: 100,
      counttype: "1 each",
      discountprecent: 12,
    },
    {
      id: 10,
      productimage: img2,
      productname: "Curd and Ghee",
      productprice: 200,
      counttype: "1 each",
      discountprecent: 12,
    },
  ];
  return (
    <div className="allproducts">
      <h1>All Products</h1>
      <div className="products">
        {products.map((item) => {
          return <ProductCard data={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default AllProduct;
