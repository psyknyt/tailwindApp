import React from "react";

const CardFull = ({name, count, setNew})=>{
    const handleMouseOut =()=>{
        setNew(!count);
    }
    return(
      <React.Fragment>
          <div className="flex justify-center" onMouseOver={handleMouseOut} >
            <div className="bg-sky-700 w-120 h-100 text-center text-white rounded p-4 hover:bg-sky-500 hover: text-grey">
                  {name}
            </div>
          </div>
      </React.Fragment>
    );
}

export default CardFull;