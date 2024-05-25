import React from "react";
import veges from "../../Imgs/veges.png";
import "./FooterFirst.css";

function FooterFirst() {
  return (
    <div className="footerfirst">
      <div className="left">
        <img src={veges} alt="" />
      </div>
      <div className="right">
        <h1>Fresh Vegetables & Fruits at your doorstep</h1>
        <p>
          We deliver fresh vegetables & fruits at your doorstep. We deliver
          fresh vegetables & fruits at your doorstep.
        </p>
      </div>
    </div>
  );
}

export default FooterFirst;
