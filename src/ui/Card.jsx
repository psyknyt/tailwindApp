import React from "react";

import homies from '../images/homies.jpg';

const Card = ({ name, count, setNew }) => {
  const handleMouseOut = () => {
    setNew(!count);
  };
  return (
    <React.Fragment>
      <div className="flex justify-center" onMouseOut={handleMouseOut}>
          <img src={homies} className="overflow-hidden w-80 h-30 rounded"/>
      </div>
    </React.Fragment>
  );
};

export default Card;
