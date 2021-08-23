import { shallow } from "enzyme";
import Cell from "../../components/Cell";

test("should correctly render icon and category name ", () => {
  const wrapper = shallow(
    <Cell value="Furniture" styleProp="text-dark cell-icon" icon={true} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should correctly render subcategory name", () => {
  const wrapper = shallow(
    <Cell value="Bookcases" styleProp={null} icon={false} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should correctly render subtotal value", () => {
  const subtotal = 7550;
  const wrapper = shallow(
    <Cell value={subtotal} styleProp="cell-light" icon={false} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should correctly render total header", () => {
  const category = "Furniture";
  const wrapper = shallow(
    <Cell
      value={`${category} total`}
      styleProp="text-dark cell-double"
      icon={false}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should correctly render total value", () => {
  const total = 2590;
  const wrapper = shallow(
    <Cell
      value={total}
      styleProp="text-dark cell-dark cell-total"
      icon={false}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
