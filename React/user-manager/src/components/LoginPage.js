import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    let users = JSON.parse(localStorage.getItem("UserData"));

    let user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      console.log("Found a user, good login");

      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userName", `${user.firstName} ${user.lastName}`);

      navigate("/users");
    } else {
      console.log("no user found, bad login");

      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userName");

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
