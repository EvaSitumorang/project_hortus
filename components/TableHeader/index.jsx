import React from "react";
import { BsListCheck } from "react-icons/bs";

const TableHeader = (props) => {
  return (
    <div>
      <span className="absolute flex text-3xl text-gray-600">
        <BsListCheck />
      </span>
      <span className="text-xl ml-8 absolute flex text-gray-600">{props.title}</span>
    </div>
  );
};

export default TableHeader;
