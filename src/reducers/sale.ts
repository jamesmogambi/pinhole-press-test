const initialState: SaleState = {
  sales: [],
};
export default (
  state: SaleState = initialState,
  action: SaleActionTypes
): SaleState => {
  switch (action.type) {
    case "SET_SALES":
      return { ...state, sales: action.payload };
    case "GET_SALES":
      return { ...state };
    default:
      return state;
  }
};
