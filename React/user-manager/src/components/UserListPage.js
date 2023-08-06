import { useEffect, useState } from "react";

function UserListPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("UserData"));
    setUsers(userData);
  }, []);

  return (
    <div className="container">
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
