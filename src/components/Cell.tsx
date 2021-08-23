import React from "react";
import cellIcon from "../icon.svg";

type CellProp = {
  value: string | number;
  icon: boolean;
  styleProp: any;
};

const Cell: React.FC<CellProp> = ({ value, styleProp, icon }) => {
  return (
    <div className={`${styleProp} cell`}>
      {icon && <img src={cellIcon} alt="icon" className="icon" />}
      {value}
    </div>
  );
};

export default Cell;
