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
      <hr />
      <h2>Grid form</h2>
      <form>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="inputEmail2" className="form-label">
              User Email:
            </label>
            <input type="email" id="inputEmail2" className="form-control" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="inputPassword2" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="inputPassword2"
              className="form-control"
            />
          </div>
        </div>
        <button className="btn btn-primary mt-3">Log in</button>
      </form>
      <hr />
      <h2>Grid form (Horizontal)</h2>
      <form>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="inputEmail2" className="form-label">
              User Email:
            </label>
            <input type="email" id="inputEmail2" className="form-control" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword2" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="inputPassword2"
              className="form-control"
            />
          </div>
        </div>
        <button className="btn btn-primary mt-3">Log in</button>
      </form>
    </div>
  );
}

export default BootstrapForm;
