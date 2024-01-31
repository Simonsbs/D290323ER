import { api } from "./apiService";

export const loginUser = (userEmail, userPassword) => {
  return api
    .post("users/login", {
      email: userEmail,
      password: userPassword,
    })
    .then((response) => {
      localStorage.setItem("token", response.data);
      return {
        success: true,
        message: "User logged in successfully",
      };
    })
    .catch((error) => {
      localStorage.setItem("token", null);
      console.error(error);
      return {
        success: false,
        message: error.response.data,
      };
    });
};
