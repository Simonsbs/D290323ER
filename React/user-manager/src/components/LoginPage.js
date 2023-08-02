import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const users = [
    {
      id: 123,
      firstName: "Simon",
      lastName: "Stirling",
      email: "a@b.com",
      password: "1234",
    },
    {
      id: 124,
      firstName: "Bob",
      lastName: "Smith",
      email: "c@d.com",
      password: "4567",
    },
    {
      id: 125,
      firstName: "Jane",
      lastName: "Doe",
      email: "e@f.com",
      password: "9876",
    },
  ];

  const handleLogin = () => {
    let user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      console.log("Found a user, good login");

      localStorage.setItem("isLoggedIn", true);

      navigate("/users");
    } else {
      console.log("no user found, bad login");

      localStorage.setItem("isLoggedIn", false);

      alert("The username and or password are wrong");
    }
  };

  return (
    <div className="container">
      <h1>Login page</h1>

      <div className="form-group">
        <label className="form-label">Email:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group mt-2">
        <label className="form-label">Password:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary mt-3" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default LoginPage;
