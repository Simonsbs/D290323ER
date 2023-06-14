import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [emotion, setEmotion] = useState("Happy");
  console.log(setEmotion);

  return (
    <div className="App">
      <h1>Simon is: {emotion}</h1>
      <button onClick={() => setEmotion("Angry")}>Angry</button>
      <button onClick={() => setEmotion("Happy")}>Happy</button>
    </div>
  );
}

export default App;
