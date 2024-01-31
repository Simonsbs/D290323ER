import { useState } from "react";
import { loginUser, registerUser } from "../services/usersService";

const Register = () => {
  const [formData, setFormData] = useState({
    name: {
      first: "",
      middle: "",
      last: "",
    },
    phone: "0512345567",
    email: "",
    password: "",
    image: {
      url: "",
      alt: "",
    },
    address: {
      state: "IL",
      country: "Israel",
      city: "Arad",
      street: "Shoham",
      houseNumber: 5,
      zip: 8920435,
    },
    isBusiness: true,
  });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleNameChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      name: {
        ...prevFormData.name,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted!");

    const response = await registerUser(formData);
    console.log(response);
    if (response.success) {
      setError(null);

      const loginResponse = await loginUser(formData.email, formData.password);
      console.log(loginResponse);
      if (loginResponse.success) {
        setError(null);
      } else {
        setError(loginResponse.message);
      }
    } else {
      setError(response.message);
    }
  };

  return (
    <div>
      <h1>Register</h1>
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
        <input
          type="text"
          placeholder="First Name"
          name="first"
          value={formData.name.first}
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="last"
          value={formData.name.last}
          onChange={handleNameChange}
        />
        <button type="submit">Register</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Register;
