function BootstrapPurchaseForm() {
  return (
    <div className="container">
      <h1>Purchase Form</h1>
      <form>
        <div className="row">
          <div className="col">
            <label className="form-label">First name:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col">
            <label className="form-label">Last name:</label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label className="form-label">Username:</label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label className="form-label">Password:</label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label className="form-label">Email:</label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label className="form-label">Address 1:</label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label className="form-label">Address 2:</label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label className="form-label">Coutry:</label>
            <select className="form-select">
              <option>Israel</option>
            </select>
          </div>
          <div className="col">
            <label className="form-label">State:</label>
            <select className="form-select">
              <option>Texas</option>
            </select>
          </div>
          <div className="col">
            <label className="form-label">Zip:</label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="mb-5 form-check form-switch">
              <input type="checkbox" id="onOff2" className="form-check-input" />
              <label htmlFor="onOff2" className="form-check-label">
                Ship to diferent address
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2>Payment details</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2>Payment details</h2>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BootstrapPurchaseForm;
