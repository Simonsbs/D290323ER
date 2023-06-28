import { useReducer } from 'react';
import './App.css';

const initalState = {
  items: []
}

function reducer(state, action){
  let itemsToCopy = [...state.items];
  switch(action.type){
    case "ADD_ITEM":
      return { items: [...state.items, action.payload.item] };
    case "DELETE_ITEM":
      itemsToCopy.splice(action.payload.index, 1);
      return { items: itemsToCopy };
    case "EDIT_ITEM":
      itemsToCopy[action.payload.index] = action.payload.item;
      return { items: itemsToCopy };
    default:
      return state;
  }
}

function App() {
  const [state, dispatcher] = useReducer(reducer, initalState);

  return (
    <h1>Welcome to my ToDo list app</h1>
  );
}

export default App;
