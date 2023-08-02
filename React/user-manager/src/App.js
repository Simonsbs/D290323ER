import "./App.css";
import MyRouter from "./components/MyRouter";

function App() {
  const users = [
    {
      id: 123,
      firstName: "Simon",
      lastName: "Stirling",
      email: "a@b.com",
      password: "1234",
    },
  ];

  return <MyRouter />;
}

export default App;
