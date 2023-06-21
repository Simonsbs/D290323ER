import { useReducer } from "react";

function reducerFunction(currentState, action) {
    // if (action.type === "inc" || action.type === "+") {

    // } else if (action.type === "dec"){

    // }

    let t = {...currentState};

    switch (action.method) {
        case "inc":
            // Code to run if is inc
            t.count += 1;
            return t;
        case "dec":
            // Code to run if is dec
            t.count -= 1;
            return t;
        case "sqr":
            // Code to run if is dec
            t.count *= t.count;
            return t;
        default:
            console.log("no action found for " + action.method);
            return currentState;
    }
}

function MyCounter() {
    const [state, setState] = useReducer(reducerFunction, { count: 0, color:"blue", petName: "Fred" });

    return (
        <>
            Count: {state.count}<br />
            Color: {state.color}<br />
            <button onClick={() => setState({method: "dec"})}>Dec (-)</button>
            <button onClick={() => setState({method: "inc"})}>Inc (+)</button>
            <button onClick={() => setState({method: "sqr"})}>Sqr (**)</button>
        </>        
    );
}

export default MyCounter