// src/App.js
import React from "react";
import Card from "../../components/card";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Testimonial from "../../components/testimonials";
import ClientSlider from "../../components/clientsSlider";
import DiscussIdea from "../../components/discussIdea";
import WhyChooseUs from "../../components/whychoose";
import Banner from "../../components/banner";
// import img from "../assets/images/f6.png";
import img1 from "../../assets/images/f6.png";
import img2 from "../../assets/images/f5.png";
import img3 from "../../assets/images/f4.png";
import img4 from "../../assets/images/f3.png";
import img5 from "../../assets/images/f2.png";
import img6 from "../../assets/images/f1.png";
import Portfolio from "../../components/portfolio";

const services = [
  {
    title: "Branding",
    content:
      "Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices",
    // img:"../assets/images/f6.png",
    img: img1,
  },
  {
    title: "Mobile App",
    content:
      "Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices",
    img: img2,
  },
  {
    title: "Web development",
    content: "Integer ante non nunc, eget est justo vel semper nunc. Lacus",
    img: img3,
  },
  {
    title: "SEO",
    content: "Integer ante non nunc, eget est justo vel semper nunc. Lacus",
    img: img4,
  },
  {
    title: "Digital marketing",
    content:
      "Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.",
    img: img5,
  },
  {
    title: "User testing",
    content:
      "Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.",
    img: img6,
  },
];

function Home() {
  return (
    <div className="bg-black">
      <Banner />
      <ClientSlider />
      <div className="my-4">
        <h1 className="text-center text-3xl text-white mb-8 font-bold">We Offer</h1>
        <p className="text-center text-sm text-gray-400 sm:w-1/3 w-11/12 mx-auto">
          Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta
          feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat
          magna semper orci a tincidunt.
        </p>
      </div>
      <div className="flex flex-wrap justify-center p-4">
        {services.map((service, index) => (
          <Card
            key={index}
            img={service.img}
            title={service.title}
            content={service.content}
          />
        ))}
      </div>
      <WhyChooseUs />
      <DiscussIdea />
      <Portfolio />
      <Testimonial />
    </div>
  );
}

export default Home;
