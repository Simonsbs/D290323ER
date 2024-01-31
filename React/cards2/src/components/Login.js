import { useState } from "react";
import { loginUser } from "../services/usersService";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "ellvis@email.com",
    password: "Abc!123Abc",
  });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted!");

    const response = await loginUser(formData.email, formData.password);
    console.log(response);
    if (response.success) {
      setError(null);
    } else {
      setError(response.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          name="email"
        />
        <input
          type="text"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          name="password"
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
