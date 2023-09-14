import React from 'react';
import Card from './Card';

const About = ({ }) => {
  return (
    <div id='about' className='flex items-center justify-center'>
      {/* Overlay */}
      <div className="container mx-auto pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card pertama */}
          <Card
            imageSrc="/card1.png"
            title="V I S I O N"
            description="Together move forward with our clients and pursue the best quality of services."
          />

          {/* Card kedua */}
          <Card
            imageSrc="/card2.png"
            title="M I S S I O N"
            description="Talent Acquisition and Strengthen thru the nations with IT area as Domain."
          />

          {/* Card ketiga */}
          <Card
            imageSrc="/card3.png"
            title="O B J E C T I V E"
            description="Meet customer requirements, by Serving Development and operation in IT Area with Good Quality, 24 hours 7 days."
          />
        </div>
      </div>
    </div>
  );
};

export default About;
