import { useReducer } from "react";
import "./App.css";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AddItem from "./Pages/AddItem";
import EditItem from "./Pages/EditItem";

const initalState = {
  items: [],
  currentColor: "blue",
};

function reducer(state, action) {
  //console.log(action);
  //console.log(state);

  switch (action.type) {
    case "ADD_ITEM":
      //console.log("requested to add data: " + action.payload);
      let newState = {
        items: [...state.items, action.payload],
        currentColor: "blue",
      };
      return newState;
    default:
      console.log("No action of type " + action.type + " was found");
      return state;
  }
}

function App() {
  const [state, dispatcher] = useReducer(reducer, initalState);

  return (
    <Router>
      <h1>Welcome to my ToDo list app</h1>
      <hr />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Add Item</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route
          path="/"
          Component={() => <Home state={state} dispatcher={dispatcher} />}
        />
        <Route
          path="/add"
          Component={() => <AddItem state={state} dispatcher={dispatcher} />}
        />
        <Route
          path="/edit"
          Component={() => <EditItem state={state} dispatcher={dispatcher} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
