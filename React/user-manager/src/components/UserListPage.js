import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserListPage() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("UserData"));
    setUsers(userData);
  }, []);

  const handleDelete = (i) => {
    if (!window.confirm("Are you sure?")) {
      return;
    }

    const updatedData = [...users];
    updatedData.splice(i, 1);
    setUsers(updatedData);

    localStorage.setItem("UserData", JSON.stringify(updatedData));
  };

  return (
    <div className="container">
      <button
        className="btn btn-primary mb-3"
        onClick={() => navigate("/add-user")}
      >
        Add User
      </button>
      <ul className="list-group">
        {users.map((u, i) => (
          <li key={u.id} className="list-group-item">
            {u.firstName} {u.lastName} - {u.email}
            <button
              className="btn btn-info"
              onClick={() => navigate(`/edit-user/${u.id}`)}
            >
              Edit
            </button>
            <button className="btn btn-warning" onClick={() => handleDelete(i)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserListPage;
