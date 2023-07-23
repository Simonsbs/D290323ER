function BootstrapForm() {
  return (
    <div className="container">
      <h2>Basic Form</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">
            User Email:
          </label>
          <input type="email" id="inputEmail" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">
            Password:
          </label>
          <input type="password" id="inputPassword" className="form-control" />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            id="inputRememberMe"
            className="form-check-input"
          />
          <label htmlFor="inputRememberMe" className="form-check-label">
            Remember me
          </label>
        </div>
        <button className="btn btn-primary">Log in</button>
      </form>
    </div>
  );
}

export default BootstrapForm;
