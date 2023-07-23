function BootstrapForm() {
  return (
    <div className="container">
      <h2>Basic Form</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">
            User Email:
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control form-control-lg"
            disabled
            value="some@email.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control form-control-lg"
          />
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
            <input
              type="email"
              id="inputEmail2"
              className="form-control"
              readOnly
              value="some@email.com"
            />
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
            <label htmlFor="inputEmail3" className="form-label">
              User Email:
            </label>
            <input type="email" id="inputEmail3" className="form-control" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword3" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="inputPassword3"
              className="form-control"
            />
          </div>
        </div>
        <button className="btn btn-primary mt-3">Log in</button>
      </form>
      <h2>Grid form with floating labels</h2>
      <form>
        <div className="row mb-3">
          <div className="col-md-6 form-floating">
            <input
              type="email"
              id="inputEmail4"
              className="form-control"
              placeholder="something@something.com"
            />
            <label htmlFor="inputEmail4" className="form-label">
              User Email:
            </label>
          </div>
          <div className="col-md-6 form-floating">
            <input
              type="password"
              id="inputPassword4"
              className="form-control"
            />
            <label htmlFor="inputPassword4" className="form-label">
              Password:
            </label>
          </div>
        </div>
        <button className="btn btn-primary mt-3">Log in</button>
      </form>
      <h2>Other stuff</h2>
      <form>
        <div className="mb-5">
          <label htmlFor="uploadFile" className="form-label">
            Upload a file:
          </label>
          <input type="file" id="uploadFile" className="form-control" />
        </div>
        <div className="mb-5">
          <label htmlFor="selectSize" className="form-label">
            Select a size:
          </label>
          <select id="selectSize" className="form-select">
            <option selected>Select a size</option>
            <option>Big</option>
            <option>Small</option>
            <option>Medium</option>
          </select>
        </div>
        <div className="mb-5">
          <label htmlFor="priceRange" className="form-label">
            Select Range:
          </label>
          <input type="range" id="priceRange" className="form-range" />
        </div>
      </form>
    </div>
  );
}

export default BootstrapForm;
