import logo from './logo.svg';
import './App.css';
import Controlled from './components/Controlled';
//import Uncontrolled from './components/uncontrolled';

function App() {
  return (
    <>
      <h1>My Site</h1>
      {/* <Uncontrolled></Uncontrolled> */}
      <Controlled></Controlled>
    </>
  );
}

export default App;
