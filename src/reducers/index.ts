import { combineReducers } from "redux";
import SaleReducer from "./sale";

export default combineReducers({
  sale: SaleReducer,
});

// export type RootState = ReturnType<typeof rootReducer>;
