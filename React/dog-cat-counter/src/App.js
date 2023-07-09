import "./App.css";
import CounterComponent from "./components/CounterComponent";
import CounterComponentV2 from "./components/CounterComponentV2";
import CounterComponentV3 from "./components/CounterComponentV3";
import CounterComponentV4 from "./components/CounterComponentV4";
import CounterComponentV5 from "./components/CounterComponentV5";

function App() {
  const h1Styling = { color: "blue", fontSize: 50 };

  return (
    <>
      {/* <h1 style={h1Styling}>This is my site</h1> */}
      <h1 className="h1Styling">This is my site</h1>
      <CounterComponentV5 />
      <hr />
      <CounterComponentV4 />
      <hr />
      <CounterComponentV3 />
      <hr />
      <CounterComponentV2 />
      <hr />
      <CounterComponent />
    </>
  );
}

export default App;
