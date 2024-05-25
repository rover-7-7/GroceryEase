import React from "react";
import "./CategorySidebar.css";
import img1 from "../../assets/Images/1.png";
import img2 from "../../assets/Images/2.png";
import img3 from "../../assets/Images/3.png";
import img4 from "../../assets/Images/4.png";
const CategorySidebar = () => {
  const data = [
    {
      id: 1,
      categoryimage: img1,
      categoryname: "Fresh Milk", // img1 matches "Fresh Milk"
    },
    {
      id: 2,
      categoryimage: img2,
      categoryname: "Dairy Products", // img2 matches "Dairy Products"
    },
    {
      id: 3,
      categoryimage: img3,
      categoryname: "Vegetables", // img3 matches "Vegetables"
    },
    {
      id: 4,
      categoryimage: img4,
      categoryname: "Meat Products", // img4 matches "Meat Products"
    },
    {
      id: 5,
      categoryimage: img1,
      categoryname: "Fresh Milk", // Repeats since img1 matches "Fresh Milk"
    },
    {
      id: 6,
      categoryimage: img2,
      categoryname: "Dairy Products", // Repeats since img2 matches "Dairy Products"
    },
    {
      id: 7,
      categoryimage: img3,
      categoryname: "Vegetables", // Repeats since img3 matches "Vegetables"
    },
    {
      id: 8,
      categoryimage: img4,
      categoryname: "Meat Products", // Repeats since img4 matches "Meat Products"
    },
  ];

  return (
    <div className="categorysidebar">
      {data.map((item) => {
        return (
          <div className="category">
            <img src={item.categoryimage} alt="categoryimage" />
            <h3>{item.categoryname}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default CategorySidebar;
