initialState = {
  list: [],
};

function ListReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
}

export default ListReducer;
