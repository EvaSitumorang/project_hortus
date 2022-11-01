import React from "react";

const Table = (props) => {
  const { children } = props;
  return (
    <div className="shadow-sm overflow-hidden my-8">
      <table className="border-collapse table-auto w-full text-sm">{children}</table>
    </div>
  );
};

export default Table;
