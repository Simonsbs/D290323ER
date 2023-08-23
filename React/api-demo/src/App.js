import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { faker } from "@faker-js/faker";

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
      username: faker.internet.userName(),
      password: "1234",
      token: "TOKEN",
      stuff: "asdasd",
    };

    axios
      .post("http://localhost:4000/users", itemToAdd)
      .then((response) => {
        console.log(response);
        setUserFromAxios([...userFromAxios, response.data]);
      })
      .catch((error) => console.log(error));
  };

  const handleEdit = (idToEdit) => {
    const itemToEdit = {
      firstName: "SIMON EDITED",
      lastName: "NEW SIMON",
      username: faker.internet.userName(),
      password: "1234",
      token: "TOKEN",
      stuff: "asdasd",
    };

    axios
      .put(`http://localhost:4000/users/${idToEdit}`, itemToEdit)
      .then((response) => {
        console.log(response);

        const index = userFromAxios.findIndex((u) => u.id === idToEdit);
        let newState = [...userFromAxios];
        newState[index] = response.data;
        setUserFromAxios(newState);
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = (idToDelete) => {
    axios
      .delete(`http://localhost:4000/users/${idToDelete}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1>My API Demo</h1>
      {/* {user ? (
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
      <hr /> */}
      {userFromAxios ? (
        <ul>
          {userFromAxios.map((u) => (
            <li key={u.id}>
              {u.id} |{u.firstName} {u.lastName} -
              <button onClick={() => handleEdit(u.id)}>Edit User</button> |
              <button onClick={() => handleDelete(u.id)}>Delete User</button>
            </li>
          ))}
        </ul>
      ) : (
        <>No data</>
      )}
      <button onClick={handleAdd}>Add User</button>
      <button
        onClick={() => handleEdit("a9c27e44-33d9-4743-b63e-a96160082c9c")}
      >
        Edit User
      </button>
    </>
  );
}

export default App;
