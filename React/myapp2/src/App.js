import './App.css';
import { doStuff } from './MyModule';
import MyTitle from './Components/MyTitle';
import MyDataTable from './Components/MyDataTable';
import MyEmotions from './Components/MyEmotions';
/*
function PrintMe(val){
  val = 30;
  console.log("PrintMe x:" + val);
}

function PrintMeObject(val){
  val.name = "Jane";
  console.log("PrintMe val.name:" + val.name);
}
*/

function App() {
  doStuff();
  /*
  let x = 10;
  let y = x;
  x = 20;

  PrintMe(x);

  console.log("Main x: " + x);

  const o1 = {name:"Simon"};
  const o2 = o1;
  
  //o1.name = "Bob";
  o2.name = "Jimmy";

  PrintMeObject(o1);
*/
  return (
    <>
      <MyEmotions></MyEmotions>
      <hr/>
      <MyTitle>
        Bob's Site
      </MyTitle>
      <MyDataTable></MyDataTable>
      {/* <div className="App">
        x: {x}<br/>
        y: {y}<br/>
        <hr/>
        o1 name: {o1.name}<br/>
        o2 name: {o2.name}<br/>
      </div> */}
    </>
  );
}

export default App;
