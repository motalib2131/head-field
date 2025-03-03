import React from "react";

const TestimonialCard = ({ name, company, testimonial, img }) => {
  return (
    <div className="max-w-xs overflow-hidden shadow-lg p-6 bg-black border border-white rounded-lg">
      <div className="flex items-center mb-6">
        <div className="w-14 h-14">
          <img src={img} />
        </div>
        <div className="ml-4">
          <h2 className="font-bold text-xl text-white">{name}</h2>
          <p className="text-gray-500 font-bold">{company}</p>
        </div>
      </div>
      <p className="text-white text-sm">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;
