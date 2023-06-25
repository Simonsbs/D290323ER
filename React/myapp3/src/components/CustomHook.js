import { useState } from "react";

function useMyHook(startValue){
    const [value, setValue] = useState(startValue);

    return [
        // Used in spread
        {
            // state value
            value,
            // onchange event
            onChange: (e) => setValue(e.target.value)
        },
        // Reset function
        () => setValue(startValue)
    ];
}

function CustomHook(){
    const [nameProps, resetName] = useMyHook("Default Value");
    const [colorProps, resetColor] = useMyHook("#FF0000");
    const [petProps, resetPet] = useMyHook("Cat");

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(`the name of the color is: ${nameProps.value}, and the selected color is: ${colorProps.value}`);

        resetName();
        resetColor();
        resetPet();
    }

    return (
        <>
            <h1>CH - the name of the color is: {nameProps.value}, and the selected color is: {colorProps.value}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" {...nameProps} placeholder="name of color..."/>    
                <input type="text" {...petProps} placeholder="name of pet..."/>
                <input type="color" {...colorProps} />
                <button>Go</button>
            </form>
        </>
    );
}

export default CustomHook;