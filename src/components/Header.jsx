import React from "react";
import "../index.css";

const Header = () => {
  return (
    <React.Fragment>
      <nav className="flex flex-row font-mono mt-2 m-5 cursor-pointer fixed top-0 w-full  bg-secondary-800  rounded text-white nav">
        <div className=" flex items-center font-bold  p-2 rounded m-2 nav-link">
          <span className="italic sm:not-italic text-blue hover:font-bold ">
            <a href={"#"}>psynyt</a>
          </span>
          <span className="hidden md:block sm:block ">
            &nbsp;|&nbsp;Saurav Nautiyal
          </span>
        </div>
        <div className="flex flex-row  ml-auto mr-10 overflow-auto ">
          <div className="nav-link flex flex-auto justify-center items-center rounded mr-5 text-grey hover:font-bold md:mr-7 lg:mr-9 xl:mr-10 sm:mr-3">
            <a href={"#"}>About</a>
          </div>
          <div className="nav-link flex flex-auto justify-center items-center rounded mr-5 text-grey hover:font-bold md:mr-7 lg:mr-9 xl:mr-10 sm:mr-3">
            <a href={"#"}>Projects</a>
          </div>
          <div className="nav-link flex flex-auto justify-center items-center rounded mr-5 text-grey hover:font-bold md:mr-7 lg:mr-9 xl:mr-10 sm:mr-3">
            <a href={"#"}>Contact</a>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
