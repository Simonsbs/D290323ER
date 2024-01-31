import { api } from "./apiService";

export const loginUser = (userEmail, userPassword) => {
  return api
    .post("users/login", {
      email: userEmail,
      password: userPassword,
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
