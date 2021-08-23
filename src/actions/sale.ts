export const setSales = (payload: ISale[]) => {
  const action: SetAction = {
    type: "SET_SALES",
    payload,
  };
  return action;
};
