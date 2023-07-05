import { Link } from "react-router-dom";

function Home({ state, dispatcher }) {
  const handleDelete = (index) => {
    let action = {
      type: "DELETE_ITEM",
      payload: { indexToDelete: index },
    };

    dispatcher(action);
  };

  return (
    <>
      <h2>ToDo Items</h2>
      <ol>
        {state.items.map((item, index) => (
          <li key={index}>
            {item} | <Link to={`/edit/${index}`}>Edit</Link> |
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </>
  );
}

export default Home;
