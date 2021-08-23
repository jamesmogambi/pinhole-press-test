import React from "react";
import { connect } from "react-redux";
import selectStates from "../selectors/states";
import { getCategories } from "../selectors/categories";
import Header from "./Header";
import Row from "./Row";

interface PivotTableProps {
  sales: ISale[];
  states: IState[];
  categories: Category[];
}
export const PivotTable: React.FC<PivotTableProps> = (props) => {
  return (
    <React.Fragment>
      <div className="scroll bg">
        <Header states={props.states} />
        <Row
          states={props.states}
          categories={props.categories}
          sales={props.sales}
        />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state: any) => {
  let { sales } = state.sale;
  return {
    states: selectStates(sales),
    sales,
    categories: getCategories(sales),
  };
};

export default connect(mapStateToProps)(PivotTable);
