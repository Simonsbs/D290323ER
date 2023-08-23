import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState();
  const [userFromAxios, setUserFromAxios] = useState();

  useEffect(() => {
    // fetch("https://api.github.com/users/simonsbs")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     setUser(data);
    //   })
    //   .catch((error) => console.error("api error", error));

    fetch("http://localhost:4000/users")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setUser(data);
      })
      .catch((error) => console.error("api error", error));
  }, []);

  // Axios
  useEffect(() => {
    axios
      .get("http://localhost:4000/users")
      .then((response) => {
        console.log(response.data);
        setUserFromAxios(response.data);
      })
      .catch((error) => console.error("api error", error));
  }, []);

  const handleAdd = () => {
    // post = insert / add
    const itemToAdd = {
      firstName: "THIS IS NEW",
      lastName: "IM NEW!!!",
      username: "NEW NEW",
      password: "1234",
      token: "TOKEN",
    };

    axios
      .post("http://localhost:4000/users", itemToAdd)
      .then((response) => {
        console.log(response);
        setUserFromAxios([...userFromAxios, response.data]);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1>My API Demo</h1>
      {user ? (
        // <ul>
        //   <li>login: {user.login}</li>
        //   <li>id: {user.id}</li>
        // </ul>
        <ul>
          {user.map((u) => (
            <li key={u.id}>
              {u.firstName} {u.lastName}
            </li>
          ))}
        </ul>
      ) : (
        <>No data</>
      )}
      <hr />
      {userFromAxios ? (
        <ul>
          {userFromAxios.map((u) => (
            <li key={u.id}>
              {u.firstName} {u.lastName}
            </li>
          ))}
        </ul>
      ) : (
        <>No data</>
      )}
      <button onClick={handleAdd}>Add User</button>
    </>
  );
}

export default App;
