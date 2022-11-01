import React from "react";

const LightGreen = ({ text }) => {
  return (
    <div>
      <button className="bg-[#48BB78] rounded-md m-1 py-1 px-3 justify-center text-white"></button>
      <button className="bg-[#48BB78] rounded-md py-0.5 px-2.5 justify-center text-white">{text}</button>
    </div>
  );
};

export default LightGreen;
