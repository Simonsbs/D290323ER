import "./App.css";
import CounterComponent from "./components/CounterComponent";
import CounterComponentV2 from "./components/CounterComponentV2";
import CounterComponentV3 from "./components/CounterComponentV3";

function App() {
  return (
    <>
      <CounterComponentV3 />
      <hr />
      <CounterComponentV2 />
      <hr />
      <CounterComponent />
    </>
  );
}

export default App;
