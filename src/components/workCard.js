// src/components/WorkCard.js
import React from 'react';

const WorkCard = ({ title, description, linkText }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-6 bg-white">
      <h2 className="font-bold text-xl mb-2">{title}</h2>
      <p className="text-gray-700 text-base mb-4">{description}</p>
      <a href="#" className="text-blue-500 hover:text-blue-700">{linkText} &rarr;</a>
    </div>
  );
};

export default WorkCard;