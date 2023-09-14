// components/Card.js

import React from 'react';

const Card = ({ imageSrc, title, description }) => {
  return (
    <div id="about" className="bg-transparant rounded-lg shadow-md  mx-auto w-80 border border-sky-600 ">
      <img src={imageSrc} alt={title} className="w-full h-50 object-cover rounded-md" />
      <h2 className=" text-white text-xl text-center font-semibold mt-2 p-2">{title}</h2>
      <p className="text-white mt-2 text-center px-10 py-5">{description}</p>
    </div>
  );
};

export default Card;
