import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditItem({ dispatcher, state }) {
  const { id } = useParams();
  const [item, setItem] = useState(state.items[id]);

  useEffect(() => {
    setItem(state.items[id]);
  }, [state.items, id]);

  //console.log(state.items);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Option 1 for action style
    /*let action = {
      type: "EDIT_ITEM",
      indexToEdit: id,
      payload: item,
    };*/

    // Option 2 for action style
    let action = {
      type: "EDIT_ITEM",
      payload: { indexToEdit: id, newValue: item },
    };

    dispatcher(action);
  };

  return (
    <>
      <h2>Edit ToDo item:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button>Save Changes</button>
      </form>
    </>
  );
}

export default EditItem;
