import { shallow } from "enzyme";
import Row from "../../components/Row";
import sales from "../fixtures/sales";

test("should correctly render Row with props", () => {
  const categories = [{ name: "Furniture" }, { name: "Technology" }];
  const states = [
    { state: "Alabama", city: "Decatur" },
    { state: "Arizona", city: "Gilbert" },
    { state: "Arkansas", city: "Fayetteville" },
  ];

  const wrapper = shallow(
    <Row sales={sales} states={states} categories={categories} />
  );
  expect(wrapper).toMatchSnapshot();
});
