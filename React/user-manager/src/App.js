import { useEffect } from "react";
import "./App.css";
import MyRouter from "./components/MyRouter";

function App() {
  useEffect(() => {
    if (!localStorage.getItem("UserData")) {
      const users = [
        {
          id: 123,
          firstName: "Simon",
          lastName: "Stirling",
          email: "a@b.com",
          password: "1234",
        },
      ];

      localStorage.setItem("UserData", JSON.stringify(users));
    }
  }, []);

  return <MyRouter />;
}

export default App;
