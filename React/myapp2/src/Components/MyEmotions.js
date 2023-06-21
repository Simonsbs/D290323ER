import { useState } from "react";

function MyEmotions() {
    const [emotion, setEmotion] = useState("Happy");
    
    const makeSad = () => {
        setEmotion("Sad");
    };
    const makeHappy = () => {
        setEmotion("Happy");
    };

    return(
    <>
        <h1>My current emotion is: {emotion}</h1>
        <button onClick={makeSad}>Sad</button>
        <button onClick={makeHappy}>Happy</button>
    </>
    );
}

export default MyEmotions