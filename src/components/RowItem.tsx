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
      return (
        <Cell styleProp="cell-light" key={i} value={subTotal} icon={false} />
      );
    });
  };

  const renderTotal = () => {
    return states.map((s, i) => {
      let { state } = s;
      let total = getTotal(state, category, sales);
      return (
        <Cell
          key={i}
          styleProp="text-dark cell-dark cell-total"
          value={total}
          icon={false}
        />
      );
    });
  };
  return (
    <div>
      <div className="row-items">
        <Cell
          value={category.name}
          styleProp="text-dark cell-icon"
          icon={true}
        />
        <div className="column">
          {subcategories.map((item, i) => (
            <div key={i} className="row-items">
              <Cell styleProp={null} value={item.subCategory} icon={false} />
              <div className="row-items">{renderSubTotal(item)}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="row-items">
        <Cell
          styleProp="text-dark cell-double"
          value={`${category.name} total`}
          icon={false}
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
