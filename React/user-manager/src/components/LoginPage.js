function LoginPage() {
  return (
    <div className="container">
      <h1>Login page</h1>

      <div className="form-group">
        <label className="form-label">Email:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your email"
        />
      </div>
      <div className="form-group mt-2">
        <label className="form-label">Password:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your password"
        />
      </div>
      <button className="btn btn-primary mt-3">Login</button>
    </div>
  );
}

export default LoginPage;
