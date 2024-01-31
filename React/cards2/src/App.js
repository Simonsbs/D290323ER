import "./App.css";
import Cards from "./components/Cards";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Login />
      <hr />
      <Register />
      <hr />
      <Cards />
    </>
  );
}

export default App;
