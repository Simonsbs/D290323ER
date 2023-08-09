import "./App.css";

function App() {
  // Object Literals:

  let person = {
    name: "Simon",
    age: 20,
    color: "Green",
  };

  //person.color = "Pink";

  person = {
    name: "Bob",
    age: 30,
    color: "Purple",
  };

  //person.color = "Yellow";

  // person = {
  //   name: "Jane",
  //   age: 40,
  //   color: "Blue",
  // };

  return (
    <>
      <ul>
        <li>Name: {person.name}</li>
        <li>Age: {person.age}</li>
        <li>Color: {person.color}</li>
      </ul>
    </>
  );
}

export default App;
