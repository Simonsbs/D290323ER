import { useReducer } from "react";

const initalState = { cats: 0, dogs: 0, msg: "", color: "pink" };

function reducer(state, action) {
  const amount = action.type === "ADD" ? 1 : action.type === "REMOVE" ? -1 : 0;
  // const amount = 0;
  // if (action.type === "ADD") {
  //   amount = 1;
  // } else {
  //   amount = -1;
  // }

  switch (action.animal) {
    case "CAT":
      return { ...state, cats: state.cats + amount };
    case "DOG":
      return { ...state, dogs: state.dogs + amount };
    case "ALL":
      return { ...state, dogs: state.dogs + amount, cats: state.cats + amount };
    default:
      return state;
  }
}

function CounterComponentV2() {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <>
      <h2>useReducer - V2</h2>
      <hr />
      <h3>Cats: {state.cats}</h3>
      <button onClick={() => dispatch({ type: "ADD", animal: "CAT" })}>
        Add cat
      </button>
      <button onClick={() => dispatch({ type: "REMOVE", animal: "CAT" })}>
        Remove cat
      </button>
      <hr />
      <h3>Dogs: {state.dogs}</h3>
      <button onClick={() => dispatch({ type: "ADD", animal: "DOG" })}>
        Add dog
      </button>
      <button onClick={() => dispatch({ type: "REMOVE", animal: "DOG" })}>
        Remove dog
      </button>
      <hr />
      <button onClick={() => dispatch({ type: "ADD", animal: "ALL" })}>
        Add dog and cat
      </button>
      <button onClick={() => dispatch({ type: "REMOVE", animal: "ALL" })}>
        Remove dog and cat
      </button>
      <hr />
      {state.msg}
    </>
  );
}

export default CounterComponentV2;
