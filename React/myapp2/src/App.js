import logo from './logo.svg';
import './App.css';

function PrintMe(val){
  val = 30;
  console.log("PrintMe x:" + val);
}

function PrintMeObject(val){
  val.name = "Jane";
  console.log("PrintMe val.name:" + val.name);
}


function App() {
  let x = 10;
  let y = x;
  x = 20;

  PrintMe(x);

  console.log("Main x: " + x);

  let o1 = {name:"Simon"};
  let o2 = o1;

  

  //o1.name = "Bob";
  o2.name = "Jimmy";

  PrintMeObject(o1);

  return (
    <div className="App">
      x: {x}<br/>
      y: {y}<br/>
      <hr/>
      o1 name: {o1.name}<br/>
      o2 name: {o2.name}<br/>
    </div>
  );
}

export default App;
