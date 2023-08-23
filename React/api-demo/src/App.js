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
    </>
  );
}

export default App;
