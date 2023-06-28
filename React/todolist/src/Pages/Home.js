import { Link } from "react-router-dom";

function Home({state, dispatcher}){
    return (
        <>
            <h2>ToDo Items</h2>
            <ol>
            {
                state.items.map((item, index) => (
                    <li key={index}>
                        {item} | <Link to="/edit">Edit</Link> | <button>Delete</button>
                    </li>
                ))
            }
            </ol>
        </>
    );
}

export default Home;