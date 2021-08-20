import React, { Dispatch } from "react";
import { connect } from "react-redux";
import { getSales } from "../actions/sale";
import selectStates from "../selectors/states";
import { getCategories } from "../selectors/categories";
import Header from "./Header";
import Row from "./Row";

interface PivotTableProps {
  states: IState[];
  sales: ISale[];
  categories: Category[];
}
const PivotTable: React.FC<PivotTableProps> = (props) => {
  return (
    <React.Fragment>
      <div className="scroll bg">
        <Header states={props.states} />
        <Row
          states={props.states}
          sales={props.sales}
          categories={props.categories}
        />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state: any) => {
  let { sales } = state.sale;
  return {
    sales,
    states: selectStates(sales),
    categories: getCategories(sales),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    getSales: () => dispatch(getSales),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PivotTable);
