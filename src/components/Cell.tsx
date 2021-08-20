import React from "react";

type CellProp = {
  value: string | number;
  style: any;
};

const Cell: React.FC<CellProp> = ({ value, style }) => {
  return <div className={`${style} cell`}>{value}</div>;
};

export default Cell;
