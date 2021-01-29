import Types from "./Types";

export const getAccount = (data) => {
  return { type: Types.GETACCOUNT, payload: data };
};
