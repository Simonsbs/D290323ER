import { useReducer } from "react";

function MyCheckBox() {
    //const [checked, setChecked] = useState(false);
    const [checked, setChecked] = useReducer((current) => !current, false);

    /*const cbChanged = () => {
        setChecked((current) => !current);
    };*/

    return (
        <>
            <input type="checkbox" onChange={setChecked}></input>
            <label>{checked ? "Checked" : "Not Checked"}</label>
        </>
    );
}

export default MyCheckBox