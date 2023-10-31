import React from "react";
import Typed from "typed.js";

import Darkbg from "../images/herobg.png";
import saurav from "../images/saurav.jpg";

import AutoTyped from "./AutoTyped";

const About = () => {
  const divStyle = {
    backgroundImage: `url(${Darkbg})`,
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
  };

  return (
    <React.Fragment>
      <div
        className="bg-scroll grid grid-cols-1 gap-4 px-4 py-20"
        style={divStyle}
      >
        <div className="">
          <img src={saurav} alt="" className="my-5 rounded-full mx-auto" />
        </div>
        <div className=" font-serif text-white font-medium text-5xl  text-center mx-auto">
          <AutoTyped className="auto-type" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
