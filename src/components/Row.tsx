import React from "react";
import RowItem from "./RowItem";

interface RowProp {
  states: IState[];
  sales: ISale[];
  categories: Category[];
}

export const Row: React.FC<RowProp> = ({ states, sales, categories }) => {
  return (
    <React.Fragment>
      <div className="container">
        {categories.map((item, i) => (
          <RowItem key={i} category={item} states={states} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Row;
