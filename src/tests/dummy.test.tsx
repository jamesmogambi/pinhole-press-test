import React from "react";
import { shallow } from "enzyme";

const Dummy: React.FC<{ title: string }> = ({ title }) => <h1>{title}</h1>;

test("renders dummy component correctly", () => {
  let title = "Dummy component";
  let wrapped = shallow(<Dummy title={title} />);
  expect(wrapped).toMatchSnapshot();
});
