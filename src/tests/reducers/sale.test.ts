import saleReducer from "../../reducers/sale";
import sales from "../fixtures/sales";

test("should set default state correctly", () => {
  let reducerState = saleReducer(undefined, { type: "@@INIT" });
  expect(reducerState).toEqual({ sales: [] });
});

test("should correctly set sales if SET_SALES action object is dispatched", () => {
  let reducerState = saleReducer(undefined, {
    type: "SET_SALES",
    payload: sales,
  });
  expect(reducerState).toEqual({ sales });
});
