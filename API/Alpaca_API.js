import axios from "axios";
import { base_URL, headers } from "./API_Headers";

export const get_Account = async () => {
  const account = "/v2/account";
  try {
    const response = await axios.get(`${base_URL}${account}`, { headers });
    console.log("response.data", response.data);
    return response.data;
  } catch {
    (err) => console.log("error", err);
  }
};

export const Get_Orders = async () => {
  const orders = "/v2/orders";
  try {
    const response = await axios.get(base_URL.concat(orders), { headers });
    console.log("res", response.data);
  } catch {
    (err) => console.log("error", err);
  }
};
