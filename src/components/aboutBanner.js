import React from "react";

const AboutBanner = ({ subtitle, title, description, buttonText }) => {
  return (
    <section className="relative w-full min-h-[400px] flex items-center px-10 md:px-20 lg:px-32">
      <div className="absolute inset-0 bg-black py-6">
        <div className="absolute bottom-[100px] left-0 w-52 h-52 bg-[#EF9364] blur-[100px] opacity-60"></div>
        <div className="absolute top-0 right-0 w-52 h-52 bg-purple-500 blur-[100px] opacity-40"></div>
      </div>

      <div className="relative max-w-2xl text-white">
        <h3 className="text-lg text-yellow-500 font-semibold">{subtitle}</h3>
        <h2 className="text-5xl font-bold">{title}</h2>
        <p className="text-gray-300 mt-4">{description}</p>
        <button className=" mt-6 px-4 py-2 bg-[#FFA800] text-black font-semibold rounded-[32px] shadow-lg hover:bg-yellow-600 transition">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default AboutBanner;
