import getStates from "../../selectors/states";
import sales from "../fixtures/sales";
test("should get all distinct states and sort alphabetically", () => {
  let states = getStates(sales);
  const output = [
    { state: "Alabama", city: "Decatur" },
    { state: "Arizona", city: "Gilbert" },
    { state: "California", city: "Los Angeles" },
  ];
  expect(states).toEqual(output);
});
