const initialState: SaleState = {
  sales: [],
};
const sale = (state: SaleState = initialState, action: any): SaleState => {
  switch (action.type) {
    case "SET_SALES":
      return { ...state, sales: action.payload };

    default:
      return state;
  }
};

export default sale;
