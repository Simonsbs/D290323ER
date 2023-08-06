import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserListPage() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("UserData"));
    setUsers(userData);
  }, []);

  return (
    <div className="container">
      <button
        className="btn btn-primary mb-3"
        onClick={() => navigate("/add-user")}
      >
        Add User
      </button>
      <ul className="list-group">
        {users.map((u) => (
          <li key={u.id} className="list-group-item">
            {u.firstName} {u.lastName} - {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserListPage;
