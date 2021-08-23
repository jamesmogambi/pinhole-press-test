export const getCategories = (args: ISale[]) => {
  return args
    .reduce((acc: Category[], current: ISale) => {
      const x = acc.find((item: Category) => item.name === current.category);
      if (!x) {
        let { category } = current;
        return acc.concat([{ name: category }]);
      } else {
        return acc;
      }
    }, [])
    .sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1));
};

export const getSubCategories = (category: Category, sales: ISale[]) => {
  return sales
    .filter((item) => item.category === category.name)
    .reduce((acc: SubCategory[], current: ISale) => {
      const x = acc.find(
        (item: SubCategory) => item.subCategory === current.subCategory
      );
      if (!x) {
        let { category, subCategory } = current;
        return acc.concat([{ category, subCategory }]);
      } else {
        return acc;
      }
    }, [])
    .sort((a, b) =>
      a.subCategory.toUpperCase() > b.subCategory.toUpperCase() ? 1 : -1
    );
};

export const getSubTotal = (
  item: SubCategory,
  state: string,
  sales: ISale[]
) => {
  let subTotal = sales
    .filter(
      (s) =>
        s.state === state &&
        s.category === item.category &&
        s.subCategory === item.subCategory
    )
    .reduce((acc, current) => acc + current.sales, 0);
  return Math.round(subTotal);
};

export const getTotal = (state: string, category: Category, sales: ISale[]) => {
  let total = sales
    .filter((s) => s.state === state && s.category === category.name)
    .reduce((acc, current) => acc + current.sales, 0);
  return Math.round(total);
};

export const getGrandTotal = (state: string, sales: ISale[]) => {
  let total = sales
    .filter((s) => s.state === state)
    .reduce((acc, current) => acc + current.sales, 0);
  return Math.round(total);
};
