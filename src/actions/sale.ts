export const setSales = (payload: ISale[]) => {
  const action: SetAction = {
    type: "SET_SALES",
    payload,
  };
  return action;
};

export const getSales = () => {
  const action: GetAction = {
    type: "GET_SALES",
    payload: null,
  };
  return action;
};
