import "./App.css";
//import Temp1 from "./components/Temp1";
import Temp2 from "./components/Temp2";
import Temp3 from "./components/Temp3";
import Temp4 from "./components/Temp4";
import Temp5 from "./components/Temp5";

function App() {
  return (
    <>
      {/* <Temp1>
        This is a <b>sample</b> component #1
      </Temp1>
      <hr /> */}
      <Temp2>
        This is a <b>sample</b> component #2
      </Temp2>
      <Temp3>
        This is a <b>sample</b> component #3
      </Temp3>
      <hr />
      <Temp4></Temp4>
      <Temp5></Temp5>
      <hr />
      <button className="btn btn-warning">Click Me!</button>
      <br />
      <button className="btn btn-primary">Click Me!</button>
      <br />
      <button className="btn btn-secondary">Click Me!</button>
      <br />
      <button className="btn btn-danger">Click Me!</button>
    </>
  );
}

export default App;
