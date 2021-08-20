import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/index";
import { setSales } from "./actions/sale";
import sales from "./data.json";
import PivotTable from "./components/PivotTable";
import "./styles/App.css";

export const App: React.FC = () => {
  const store = createStore(reducers, composeWithDevTools(applyMiddleware()));
  store.dispatch(setSales(sales));
  return (
    <Provider store={store}>
      <PivotTable />
    </Provider>
  );
};

export default App;
