import React from "react";
import { connect } from "react-redux";
import {
  getSubCategories,
  getSubTotal,
  getTotal,
} from "../selectors/categories";
import Cell from "./Cell";

interface RowItemProp {
  category: Category;
  states: IState[];
  sales: ISale[];
  subcategories: SubCategory[];
}

export const RowItem: React.FC<RowItemProp> = (props) => {
  let { category, subcategories, states, sales } = props;

  const renderSubTotal = (item: SubCategory) => {
    return states.map((s, i) => {
      let { state } = s;
      let subTotal = getSubTotal(item, state, sales);
      return <Cell style="cell-light" key={i} value={subTotal} />;
    });
  };

  const renderTotal = () => {
    return states.map((s, i) => {
      let { state } = s;
      let total = getTotal(state, category, sales);
      return (
        <Cell key={i} style="text-dark cell-dark cell-total" value={total} />
      );
    });
  };
  return (
    <div>
      <div className="row-items">
        <Cell value={category.name} style="text-dark" />
        <div className="column">
          {subcategories.map((item, i) => (
            <div key={i} className="row-items">
              <Cell style="shadow" value={item.subCategory} />
              <div className="row-items">{renderSubTotal(item)}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="row-items">
        <Cell
          style="text-dark cell-double shadow"
          value={`${category.name} total`}
        />
        <div className="row-items">{renderTotal()}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any, ownProps: any) => {
  let { sales } = state.sale;
  let { category } = ownProps;
  return {
    sales,
    subcategories: getSubCategories(category, sales),
  };
};

export default connect(mapStateToProps)(RowItem);
