import React from "react";
import Card from "./card";

const OtherService = ({ title, services }) => {
  return (
    <div className="bg-[#0F0F0F] py-4">
      <div className="w-[83%] mx-auto">
        <h2 className="font-agrandir font-bold text-2xl leading-[56px] text-white">
          {title}
        </h2>
        <div className="sm:flex flex-row">
          {services.map((service, index) => (
            <Card
              key={index}
              img={service.img}
              title={service.title}
              content={service.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherService;
