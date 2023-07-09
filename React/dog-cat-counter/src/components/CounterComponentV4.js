import { useState } from "react";

const initalState = { cats: 0, dogs: 0 };

function CounterComponentV4() {
  const [state, setState] = useState(initalState);

  return (
    <>
      <h2>useReducer - V4</h2>
      <hr />
      <h3>Cats: {state.cats}</h3>
      <button onClick={() => setState({ ...state, cats: state.cats + 1 })}>
        Add cat
      </button>
      <button onClick={() => setState({ ...state, cats: state.cats - 1 })}>
        Remove cat
      </button>
      <hr />
      <h3>Dogs: {state.dogs}</h3>
      <button onClick={() => setState({ ...state, dogs: state.dogs + 1 })}>
        Add dog
      </button>
      <button onClick={() => setState({ ...state, dogs: state.dogs - 1 })}>
        Remove dog
      </button>
      <hr />
      <button
        onClick={() =>
          setState({ ...state, dogs: state.dogs + 1, cats: state.cats + 1 })
        }
      >
        Add dog and cat
      </button>
      <button
        onClick={() =>
          setState({ ...state, dogs: state.dogs - 1, cats: state.cats - 1 })
        }
      >
        Remove dog and cat
      </button>
    </>
  );
}

export default CounterComponentV4;
