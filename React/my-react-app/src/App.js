import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [emotion, setEmotion] = useState("Happy");
  const [color, setColor] = useState("Red");
  
  console.log(setEmotion);

  return (
    <div className="App">
      
      <h1>Simon is: {emotion}</h1>
      <h1>My color is: {color}</h1>
      <button onClick={() => setEmotion("Angry")}>Angry</button>
      <button onClick={() => setEmotion("Happy")}>Happy</button>
<hr />
      {/* TODO: Add 2 buttons that change color from red to blue and back */}
      <button onClick={()=>setColor("Red")}>Red</button>
      <button onClick={()=>setColor("Blue")}>Blue</button>
    </div>
  );
}

export default App;
