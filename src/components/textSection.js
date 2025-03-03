import React from "react";

const TextSection = ({ description, title }) => {
  return (
    <div className="pb-8">
      <div className="">
        <div className="sm:w-4/5 w-11/12">
          <h3 className="font-agrandir font-bold text-2xl leading-[56px] text-white">
            {title}
          </h3>
          <p className="font-agrandir font-normal text-base leading-6 text-[#FFFFFF99]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextSection;
