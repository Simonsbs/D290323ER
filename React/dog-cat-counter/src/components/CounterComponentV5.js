import { useState } from "react";

const initalState = { cats: 0, dogs: 0 };

function usePetCounter() {
  const [state, setState] = useState(initalState);

  const addCat = () => {
    setState({ ...state, cats: state.cats + 1 });
  };

  const removeCat = () => {
    setState({ ...state, cats: state.cats - 1 });
  };

  const addDog = () => {
    setState({ ...state, dogs: state.dogs + 1 });
  };

  const removeDog = () => {
    setState({ ...state, dogs: state.dogs - 1 });
  };

  const addDogAndCat = () => {
    setState({ ...state, dogs: state.dogs + 1, cats: state.cats + 1 });
  };

  const removeDogAndCat = () => {
    setState({ ...state, dogs: state.dogs - 1, cats: state.cats - 1 });
  };

  return {
    state,
    addCat,
    removeCat,
    addDog,
    removeDog,
    addDogAndCat,
    removeDogAndCat,
  };
}

function CounterComponentV5() {
  const {
    state,
    addCat,
    removeCat,
    addDog,
    removeDog,
    addDogAndCat,
    removeDogAndCat,
  } = usePetCounter();

  return (
    <>
      <h2>useReducer - V5</h2>
      <hr />
      <h3>Cats: {state.cats}</h3>
      <button onClick={addCat}>Add cat</button>
      <button onClick={removeCat}>Remove cat</button>
      <hr />
      <h3>Dogs: {state.dogs}</h3>
      <button onClick={addDog}>Add dog</button>
      <button onClick={removeDog}>Remove dog</button>
      <hr />
      <button onClick={addDogAndCat}>Add dog and cat</button>
      <button onClick={removeDogAndCat}>Remove dog and cat</button>
    </>
  );
}

export default CounterComponentV5;
