import { useRef } from "react";

function AddItem({ dispatcher }) {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    //alert(inputRef.current.value);

    let action = {
      type: "ADD_ITEM",
      payload: inputRef.current.value,
    };

    dispatcher(action);
  };

  return (
    <>
      <h2>Add new ToDo item:</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button>Add item</button>
      </form>
    </>
  );
}

export default AddItem;
