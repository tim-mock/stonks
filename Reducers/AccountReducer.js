import Types from "../Types";

initialState = {
  account: {},
};

function AccountReducer(state = initialState, action) {
  switch (action.type) {
    case Types.GETACCOUNT:
      return { ...state, account: action.payload };
    default:
      return {
        ...state,
      };
  }
}

export default AccountReducer;
