import "./App.css";
import CounterComponent from "./components/CounterComponent";
import CounterComponentV2 from "./components/CounterComponentV2";
import CounterComponentV3 from "./components/CounterComponentV3";
import CounterComponentV4 from "./components/CounterComponentV4";
import CounterComponentV5 from "./components/CounterComponentV5";

function App() {
  return (
    <>
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
