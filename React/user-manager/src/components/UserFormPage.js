import { useState } from "react";

function UserFormPage() {
  const [user, setUser] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  return (
    <div className="container">
      <div className="form-group">
        <label className="form-label">ID:</label>
        <input
          type="text"
          value={user.id}
          onChange={(e) => setUser({ ...user, id: e.target.value })}
          className="form-control"
          placeholder="xx"
        />
      </div>
      <div className="form-group">
        <label className="form-label">First Name:</label>
        <input
          type="text"
          value={user.firstName}
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          className="form-control"
          placeholder="enter users first name"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Last Name:</label>
        <input
          type="text"
          value={user.lastName}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          className="form-control"
          placeholder="enter users last name"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Email:</label>
        <input
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="form-control"
          placeholder="enter users email"
        />
      </div>
      <div className="form-group mb-2">
        <label className="form-label">Password:</label>
        <input
          type="text"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="form-control"
          placeholder="enter users password"
        />
      </div>
      <button className="btn btn-primary me-2">Save</button>
      <button className="btn btn-danger">Cancel</button>
    </div>
  );
}

export default UserFormPage;
