import { useEffect, useState } from "react";

function MyEmotions() {
    const [emotion, setEmotion] = useState("Happy");
    const [color, setColor] = useState("Blue");
    const [counter, setCounter] = useState(0);
    
    const makeSad = () => {
        setEmotion("Sad");
    };
    const makeHappy = () => {
        setEmotion("Happy");
    };

    const makeGreen = () => {
        setColor("Green");
    };
    const makeBlue = () => {
        setColor("Blue");
    };

    const addToCounter = () =>{
        setCounter(counter + 1);
    };

    useEffect(() => {
        if(color === "Green"){
            console.log('IM GREEN!!!');
        }else{
            console.log('Hey from effect');
        }
        
    }, [color, emotion]);

    // useEffect(() => {
    //     console.log('Hey from emotion effect');
    // }, [emotion]);

    return(
    <>
        <h1>My current emotion is: {emotion}</h1>
        <button onClick={makeSad}>Sad</button>
        <button onClick={makeHappy}>Happy</button>
        <hr/>
        <h1>My current color is: {color}</h1>
        <button onClick={makeGreen}>Green</button>
        <button onClick={makeBlue}>Blue</button>
        <hr/>
        <h1>My current counter is: {counter}</h1>
        <button onClick={addToCounter}>Add to counter</button>
    </>
    );
}

export default MyEmotions