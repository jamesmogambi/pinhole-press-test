const selectStates = (args: ISale[]) => {
  return args
    .reduce((acc: IState[], current: ISale) => {
      const x = acc.find((item: IState) => item.state === current.state);
      if (!x) {
        let { state, city } = current;
        return acc.concat([{ state, city }]);
      } else {
        return acc;
      }
    }, [])
    .sort((a: IState, b: IState) =>
      a.state.toUpperCase() > b.state.toUpperCase() ? 1 : -1
    );
};

export default selectStates;
