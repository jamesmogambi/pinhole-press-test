import React from "react";
import RowItem from "./RowItem";
import Cell from "./Cell";
import { getGrandTotal } from "../selectors/categories";

interface RowProp {
  states: IState[];
  sales: ISale[];
  categories: Category[];
}

export const Row: React.FC<RowProp> = ({ states, categories, sales }) => {
  const renderGrandTotal = () => {
    return states.map((s, i) => {
      let { state } = s;
      let grandTotal = getGrandTotal(state, sales);
      return (
        <Cell
          key={i}
          styleProp="text-dark cell-dark cell-total"
          value={grandTotal}
          icon={false}
        />
      );
    });
  };

  return (
    <React.Fragment>
      <div className="container">
        {categories.map((item, i) => (
          <RowItem key={i} category={item} states={states} />
        ))}
        <div className="row-items item-border">
          <Cell
            styleProp="text-dark cell-double"
            value="Grand Total"
            icon={false}
          />
          {renderGrandTotal()}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Row;
