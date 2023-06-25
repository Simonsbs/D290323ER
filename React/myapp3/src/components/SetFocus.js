import { useRef } from "react";

function SetFocus(){
    const refInput1 = useRef();
    const refInput2 = useRef();
    const refInput3 = useRef();

    return (
        <>
            <div>
                <input type="text" ref={refInput1} placeholder="Im a text box 1" />
                <button onClick={() => refInput1.current.focus()}>Focus 1</button>
                <br/>
                <input type="text" ref={refInput2} placeholder="Im a text box 2" />
                <button onClick={() => refInput2.current.focus()}>Focus 2</button>
                <br/>
                <input type="text" ref={refInput3} placeholder="Im a text box 3" />
                <button onClick={() => refInput3.current.focus()}>Focus 3</button>
            </div>
        </>
    );
}

export default SetFocus;