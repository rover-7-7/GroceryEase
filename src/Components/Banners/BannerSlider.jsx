import React from "react";
import Slider from "react-slick";
import "./BannerSlider.css";

const BannerSlider = () => {
  const slideImg1 =
    "https://images.unsplash.com/photo-1506617564039-2f3b650b7010?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdyb2Nlcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60";

  const slideImg2 =
    "https://plus.unsplash.com/premium_photo-1664202219877-b32fcd5aa731?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdyb2Nlcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60";
  const data = [
    {
      id: 1,
      image: slideImg1,
      title: "Fresh & Vibrant: Vegetable Spectacular at Your Doorstep",
      description:
        "Experience a burst of flavor and health with our home-delivered Vegetable Spectacular – bringing freshness and vibrancy right to your doorstep!",
      button:
        "https://www.bigbasket.com/bbnow/?utm_source=google&gclid=CjwKCAjwyNSoBhA9EiwA5aYlb_u0vDOKbgclmV7Dks4pybUFVcqcyHKMW9mHOpqz3deaZ7KOT3B2QRoCIWcQAvD_BwE&utm_campaign=HM-BBNow-Brand&utm_medium=cpc",
    },
    {
      id: 2,
      image: slideImg2,
      title: "Fresh & Vibrant: Vegetable Spectacular at Your Doorstep",
      description:
        "Bringing the farmer's market to your doorstep with our Fresh & Vibrant Vegetable Spectacular – taste the difference in every bite, conveniently delivered to you!",
      button:
        "https://www.bigbasket.com/bbnow/?utm_source=google&gclid=CjwKCAjwyNSoBhA9EiwA5aYlb_u0vDOKbgclmV7Dks4pybUFVcqcyHKMW9mHOpqz3deaZ7KOT3B2QRoCIWcQAvD_BwE&utm_campaign=HM-BBNow-Brand&utm_medium=cpc",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="bannerslider">
      <Slider className="bannerslider" {...settings}>
        {data.map((item) => {
          return (
            <div className="imagecont" key={item.id}>
              <img src={item.image} alt="img" />
              <div className="content">
                <h1>{item.title}</h1>
                <span>{item.description}</span>
                <button>Shop More</button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default BannerSlider;
