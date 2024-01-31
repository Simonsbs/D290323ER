import { api } from "./apiService";

export const getAllCards = () => {
  return api
    .get("cards")
    .then((response) => {
      return {
        success: true,
        message: response.data,
      };
    })
    .catch((error) => {
      console.error(error);
      return {
        success: false,
        message: error.response.data,
      };
    });
};
