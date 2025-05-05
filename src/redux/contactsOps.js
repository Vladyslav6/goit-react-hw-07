import axios from "axios";
import { dataConactsOperations, setError, setLoading } from "./ContactSlice";

axios.defaults.baseURL = "https://68188cec5a4b07b9d1cfb0b6.mockapi.io";

export const fetchContactsData = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get("/contacts");

    dispatch(dataConactsOperations(response.data));
    dispatch(setLoading(false));
    console.log(response.data);
  } catch (error) {
    dispatch(setError(error));
    console.log(error);
  }
};
