import { useState } from "react";



function Controlled(){
    const [name, setName] = useState("");
    const [color, setColor] = useState("#000000");

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(`the name of the color is: ${name}, and the selected color is: ${color}`);
    }

    return (
        <>
            <h1>the name of the color is: {name}, and the selected color is: {color}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="name of color..."/>    
                <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
                <button>Go</button>
            </form>
        </>
    );
}

export default Controlled;