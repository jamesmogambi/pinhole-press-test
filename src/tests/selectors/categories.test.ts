import {
  getCategories,
  getSubCategories,
  getSubTotal,
  getTotal,
  getGrandTotal,
} from "../../selectors/categories";
import sales from "../fixtures/sales";

test("should get distinct categories and sort alphabetically", () => {
  let categories = getCategories(sales);
  expect(categories).toEqual([{ name: "Furniture" }, { name: "Technology" }]);
});

test("should get distinct sub-categories and sort alphabetically", () => {
  let categories = getSubCategories({ name: "Furniture" }, sales);
  let output = [
    { category: "Furniture", subCategory: "Bookcases" },
    { category: "Furniture", subCategory: "Chairs" },
  ];
  expect(categories).toEqual(output);
});

test("should get correct subtotal of all sales of a given subcategory of a given state ", () => {
  let subtotal = getSubTotal(
    { category: "Furniture", subCategory: "Bookcases" },
    "Alabama",
    sales
  );
  expect(subtotal).toBe(1694);
});

test("should return 0 for subtotal if sales of a given subcategory does not exist in a given state", () => {
  let subtotal = getSubTotal(
    { category: "Furniture", subCategory: "Bookcases" },
    "Arizona",
    sales
  );
  expect(subtotal).toBe(0);
});

test("should get total sales of all subtotals of all subcategories belonging to a given state", () => {
  let total = getTotal("Alabama", { name: "Furniture" }, sales);
  expect(total).toBe(1694);
});

test("should get grand total of all subtotal of a given state", () => {
  let total = getGrandTotal("Alabama", sales);
  expect(total).toBe(1694);
});
