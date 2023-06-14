import logo from './logo.svg';
import './App.css';

function App({ name, color }) {
  const [firstFruit, secondThing, anotherThingy] = ["Apple", "Pear", "Orange"];

  console.log(firstFruit);
  console.log(secondThing);
  console.log(anotherThingy);

  return (
    <div className="App">
      <h1>{name}'s Hello World the color is: {color}</h1>
      <p>{firstFruit}</p>
      <p>{secondThing}</p>
      <p>{anotherThingy}</p>
    </div>
  );
}

export default App;
