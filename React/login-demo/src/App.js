import "./App.css";
import { useState } from "react";
import axios from "axios";

const ProjectID = "3ee2483e-1fd3-4616-b6c1-9c96e06aae56";

function App() {
  const [loginForm, setLoginForm] = useState({
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    setLoginForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://gnte7mjwg9.execute-api.us-east-1.amazonaws.com/newdev/login/" +
          ProjectID,
        loginForm
      )
      .then((response) => {
        localStorage.setItem("USER_TOKEN", response.data.token);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="string"
        name="Email"
        value={loginForm.Email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="string"
        name="Password"
        value={loginForm.Password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default App;
