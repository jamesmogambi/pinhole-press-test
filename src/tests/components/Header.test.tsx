import { shallow } from "enzyme";
import Header from "../../components/Header";

test("should correctly render Header with states", () => {
  const states = [
    { state: "Alabama", city: "Decatur" },
    { state: "Arizona", city: "Gilbert" },
    { state: "Arkansas", city: "Fayetteville" },
    { state: "California", city: "Los Angeles" },
    { state: "Colorado", city: "Aurora" },
    { state: "Connecticut", city: "Fairfield" },
  ];

  let wrapper = shallow(<Header states={states} />);
  expect(wrapper).toMatchSnapshot();
});
