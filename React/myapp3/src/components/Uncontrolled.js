import { useRef } from "react";

function Uncontrolled(){
    const tbName = useRef();
    const csColor = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const name = tbName.current.value;
        const color = csColor.current.value;

        alert(`the name of the color is: ${name}, and the selected color is: ${color}`);

        tbName.current.value = "New color...";
        csColor.current.value = "#000000";
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={tbName} placeholder="name of color"/>
                <input type="color" ref={csColor} />
                <button>Do</button>
            </form>
        </>
    );
}

export default Uncontrolled;