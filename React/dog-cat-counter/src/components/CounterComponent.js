import { useReducer } from "react";

const initalState = { cats: 0, dogs: 0, msg: "", color: "pink" };

function reducer(state, action) {
  switch (action.type) {
    case "ADD_CAT":
      return { ...state, cats: state.cats + 1, msg: "added one cat" };
    case "REMOVE_CAT":
      if (state.cats <= 0) {
        return { ...state, cats: 0, msg: "not enough cats to remove from" };
      }
      return {
        ...state,
        cats: state.cats - 1,
        msg: "removed one cat",
      };
    case "ADD_DOG":
      return { ...state, dogs: state.dogs + 1, msg: "added one dog" };
    case "REMOVE_DOG":
      if (state.dogs <= 0) {
        return { ...state, dogs: 0, msg: "not enough dogs to remove from" };
      }
      return { ...state, dogs: state.dogs - 1, msg: "removed one dog" };
    case "ADD_DOG_CAT":
      return {
        ...state,
        dogs: state.dogs + 1,
        cats: state.cats + 1,
        msg: "added to both dogs and cats",
      };
    case "REMOVE_DOG_CAT":
      return {
        ...state,
        dogs: state.dogs - 1,
        cats: state.cats - 1,
        msg: "removed to both dogs and cats",
      };
    default:
      return state;
  }
}

function CounterComponent() {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <>
      <hr />
      <h3>Cats: {state.cats}</h3>
      <button onClick={() => dispatch({ type: "ADD_CAT" })}>Add cat</button>
      <button onClick={() => dispatch({ type: "REMOVE_CAT" })}>
        Remove cat
      </button>
      <hr />
      <h3>Dogs: {state.dogs}</h3>
      <button onClick={() => dispatch({ type: "ADD_DOG" })}>Add dog</button>
      <button onClick={() => dispatch({ type: "REMOVE_DOG" })}>
        Remove dog
      </button>
      <hr />
      <button onClick={() => dispatch({ type: "ADD_DOG_CAT" })}>
        Add dog and cat
      </button>
      <button onClick={() => dispatch({ type: "REMOVE_DOG_CAT" })}>
        Remove dog and cat
      </button>
      <hr />
      {state.msg}
    </>
  );
}

export default CounterComponent;
