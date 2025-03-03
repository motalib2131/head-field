// src/App.js
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./testimonialCard";
import img1 from "../assets/images/t1.png";
import img2 from "../assets/images/t2.png";
import img3 from "../assets/images/t3.png";
import img4 from "../assets/images/t4.png";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const testimonials = [
  {
    name: "Brooklyn Simmons",
    company: "manem",
    img: img1,
    testimonial:
    "Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci.",
  },
  {
    name: "Esther Howard",
    company: "Offmax",
    img: img2,
    testimonial:
    "Vitae tellus bibendum nibh integer auctor pretium sed. Sollicitudin tristique euismod elit.",
  },
  {
    name: "Arlene McCog",
    company: "bloepixel",
    img: img3,
    testimonial:
      "Eu eu eget lorem commodo sagittis enim in viverra. Urna egestas ipsum gravida tempor. Libero, consectetur urna in enim magnis. Est.",
  },
  {
    name: "Jane Cooper",
    company: "unpoxel",
    img: img4,
    testimonial: "Amet aliquam, volutpat nisl, duis sed at. Vehicula proin consectetur risus dictumst nec amet consequat at tempus. Ornare dapibus nunc fames nibh morbi viverra eu sed mattis. ",
  },
  {
    name: "Esther Howard",
    company: "Offmax",
    img: img2,
    testimonial: "Vitae tellus bibendum nibh...",
  },
];

function Testimonial() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrow:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center mb-10 flex justify-between mr-8">
        <h1 className="sm:text-xl text-sm font-bold text-white ">
          Hear what our customers say?
        </h1>
        <div>
          <button
            className=" text-yellow-500 border border-yellow-500 sm:p-3 p-1 rounded-md"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <MdKeyboardArrowLeft size={20} />
          </button>
          <button
            className="text-yellow-500 border border-yellow-500 sm:p-3 p-1 rounded-md ml-4"
            onClick={() => sliderRef.current.slickNext()}
          >
            <MdKeyboardArrowRight size={20} />
          </button>
        </div>
      </div>
      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <TestimonialCard
                name={testimonial.name}
                company={testimonial.company}
                testimonial={testimonial.testimonial}
                img={testimonial.img}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;
