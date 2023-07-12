import "./App.css";
//import Temp1 from "./components/Temp1";
import Temp2 from "./components/Temp2";
import Temp3 from "./components/Temp3";
import Temp4 from "./components/Temp4";
import Temp5 from "./components/Temp5";

function App() {
  return (
    <>
      <div className="p-5">
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
        <div className="alert alert-success mb-4">
          Congratulations, you did it!!!
        </div>
        <div className="alert alert-danger mb-4">Oh-No, you deleted it!!!!</div>
        <hr />
        <h1 className="fw-bolder">
          This is <small className="fw-normal fst-italic">my cool</small>{" "}
          bootstrap site
        </h1>
        <img
          src="https://picsum.photos/id/237/500/300"
          alt="A cute dog"
          className="rounded"
        ></img>
        <img
          src="https://picsum.photos/id/237/500/300"
          alt="A cute dog"
          className="rounded-circle"
        ></img>
        <img
          src="https://picsum.photos/id/237/500/300"
          alt="A cute dog"
          className="rounded-pill"
        ></img>

        <div className="m-1">
          <button className="btn btn-warning">Click Me!</button>
          <br />
          <button className="btn btn-primary">Click Me!</button>
          <br />
          <button className="btn btn-secondary">Click Me!</button>
          <br />
          <button className="btn btn-danger">Click Me!</button>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">1</div>
          <div className="col">2</div>
          <div className="col">3</div>
          <div className="col">4</div>
          <div className="col">5</div>
        </div>
        <div className="row">
          <div className="col">1</div>
          <div className="col">2</div>
          <div className="col">3</div>
          <div className="col">4</div>
          <div className="col">5</div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
