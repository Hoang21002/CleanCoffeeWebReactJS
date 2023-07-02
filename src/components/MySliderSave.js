import React from "react";
import Slider from "react-slick";
import CardSave from "./CardSave";

const data = [
  { img: "assets/img/caphemilano.png" },
  { img: "assets/img/xephangimg (2).png" },
  { img: "assets/img/xephangimg (5).png" },
  { img: "assets/img/xephangimg (5).png" },
  { img: "assets/img/xephangimg (10).png" },
  { img: "assets/img/xephangimg (12).png" },
  { img: "assets/img/xephangimg (13).png" },
  { img: "assets/img/xephangimg (11).png" },
]
const MySliderSave = () => {

  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    draggable: false,
    prevArrow: <button type='button' class='slick-prev pull-left'><img src="assets/Icons/ArrowLeft.png" alt="" /></button>,
    nextArrow: <button type='button' class='slick-next pull-right'><img src="assets/Icons/ArrowRight.png" alt="" /></button>,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };

  return (
    <div className="container-list-xephanh">

      <Slider {...settings}>
        {data.map((el, index) => <CardSave key={index} img={el.img} />)}
      </Slider>

    </div>

  )
}

export default MySliderSave;