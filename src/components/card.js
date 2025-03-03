import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({ title, content, img }) => {

  useEffect(() => {
    AOS.init({
      duration: 300, 
      once: false, 
      offset: 100, 
      mirror: true, 
    });
  }, []);

  return (
    <div
      className="max-w-sm overflow-hidden shadow-lg sm:mx-4 mx-0 mb-4 p-4 bg-[#0F0F0F] border border-white rounded-lg"
      data-aos="fade-up"
    >
      <img src={img} className="w-12 h-12 mb-2" alt={title} />
      <h2 className="font-bold text-xl mb-2 text-white">{title}</h2>
      <p className="text-gray-400 text-sm mb-6 w-9/12">{content}</p>
    </div>
  );
};

export default Card;
