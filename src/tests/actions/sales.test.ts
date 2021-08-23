import { setSales } from "../../actions/sale";
import sales from "../fixtures/sales";

test("should correctly return SET_SALES action object with payload data ", () => {
  let action = setSales(sales);
  expect(action).toEqual({
    type: "SET_SALES",
    payload: sales,
  });
});
