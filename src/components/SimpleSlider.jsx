import Slider from "react-slick";
import { banner1, banner2, banner3, slider1 } from "../assets";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      <div className="relative h-56   overflow-hidden rounded-3xl md:h-[60vh]">
        <div className=" duration-700 h-full  ease-in-out rounded-3xl  ">
          <img
            src={banner1}
            className=" object-fill h-full block w-full "
            alt="..."
          />
        </div>
      </div>
      <div className="relative h-56   overflow-hidden rounded-3xl md:h-[60vh]">
        <div className=" duration-700 h-full  ease-in-out rounded-3xl  ">
          <img
            src={slider1}
            className=" object-fill h-full block w-full "
            alt="..."
          />
        </div>
      </div>
      <div className="relative h-56   overflow-hidden rounded-3xl md:h-[60vh]">
        <div className=" duration-700 h-full  ease-in-out rounded-3xl  ">
          <img
            src={banner3}
            className=" object-fill h-full block w-full "
            alt="..."
          />
        </div>
      </div>
      <div className="relative h-56   overflow-hidden rounded-3xl md:h-[60vh]">
        <div className=" duration-700 h-full  ease-in-out rounded-3xl  ">
          <img
            src={banner1}
            className=" object-fill h-full block w-full "
            alt="..."
          />
        </div>
      </div>
      <div className="relative h-56   overflow-hidden rounded-3xl md:h-[60vh]">
        <div className=" duration-700 h-full  ease-in-out rounded-3xl  ">
          <img
            src={banner2}
            className=" object-fill h-full block w-full "
            alt="..."
          />
        </div>
      </div>
    </Slider>
  );
}
