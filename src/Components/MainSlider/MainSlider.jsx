/** @format */

import Slider from "react-slick";
import img1 from "../../assets/images/main-slider-1.jpeg";
import img2 from "../../assets/images/main-slider-2.jpeg";
import img3 from "../../assets/images/main-slider-3.jpeg";
export default function MainSlider() {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="my-12">
      <div className="flex">
        <div className=" md:w-2/3">
          <Slider {...settings}>
            <img src={img3} className="w-full block h-full" alt="slider-img1" />
            <img src={img1} className="w-full block h-full" alt="slider-img1" />
            <img src={img2} className="w-full block h-full" alt="slider-img1" />
          </Slider>
        </div>
        <div className=" md:w-1/3">
          <img src={img1} className="w-full" alt="" />
          <img src={img2} className="w-full" alt="" />
        </div>
      </div>
    </div>
  );
}
