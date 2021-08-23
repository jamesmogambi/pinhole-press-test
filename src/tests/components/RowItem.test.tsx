import { shallow } from "enzyme";
import { RowItem } from "../../components/RowItem";
import sales from "../fixtures/sales";

test("should correctly render RowItem with category ,subcategories , subtotal and total", () => {
  const subcategories = [
    { category: "Furniture", subCategory: "Bookcases" },
    { category: "Furniture", subCategory: "Chairs" },
  ];

  const states = [
    { state: "Alabama", city: "Decatur" },
    { state: "Arizona", city: "Gilbert" },
    { state: "Arkansas", city: "Fayetteville" },
  ];

  let wrapper = shallow(
    <RowItem
      category={{ name: "Furniture" }}
      states={states}
      subcategories={subcategories}
      sales={sales}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
