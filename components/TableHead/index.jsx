import React from "react";

const TableHead = (props) => {
  return (
    <thead className="mt-10 bg-[#064635]">
      <tr>{<th className="text-white text-sm">{props.TableHead}</th>}</tr>
    </thead>
  );
};

export default TableHead;
