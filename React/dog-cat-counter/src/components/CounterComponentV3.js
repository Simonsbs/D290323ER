import { useState } from "react";

function CounterComponentV3() {
  const [cats, setCats] = useState(0);
  const [dogs, setDogs] = useState(0);

  return (
    <>
      <h2>useReducer - V3</h2>
      <hr />
      <h3>Cats: {cats}</h3>
      <button onClick={() => setCats(cats + 1)}>Add cat</button>
      <button onClick={() => setCats(cats - 1)}>Remove cat</button>
      <hr />
      <h3>Dogs: {dogs}</h3>
      <button onClick={() => setDogs(dogs + 1)}>Add dog</button>
      <button onClick={() => setDogs(dogs - 1)}>Remove dog</button>
      <hr />
      <button
        onClick={() => {
          setDogs(dogs + 1);
          setCats(cats + 1);
        }}
      >
        Add dog and cat
      </button>
      <button
        onClick={() => {
          setDogs(dogs - 1);
          setCats(cats - 1);
        }}
      >
        Remove dog and cat
      </button>
    </>
  );
}

export default CounterComponentV3;
