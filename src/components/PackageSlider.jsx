import Slider from "react-slick";

import Heading from "./Heading";

export default function PackageSlider({ children, heading, showSlide = 4 }) {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: showSlide,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full  mb-6">
      <Heading>{heading}</Heading>

      <div className="slide-content relative mx-2 lg:mx-6 mt-6 lg:mt-20">
        <Slider {...settings}>{children}</Slider>
      </div>
    </div>
  );
}

function SampleNextArrow({ onClick }) {
  return (
    <div className="z-[50] absolute right-[-15px] top-[40%] " onClick={onClick}>
      <div className="bg-primary hover:bg-primary/70   h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer">
        <span>
          <i className="ri-arrow-right-s-line text-3xl text-white"></i>
        </span>
      </div>
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className="z-[50] absolute left-[-15px] top-[40%] " onClick={onClick}>
      <div className="bg-primary hover:bg-primary/50   h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer">
        <span>
          <i className="ri-arrow-left-s-line text-3xl text-white"></i>
        </span>
      </div>
    </div>
  );
}
