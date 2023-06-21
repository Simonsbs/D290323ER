import { useState, useEffect } from "react";
import MyDataRow from "./MyDataRow";

const listOfPeople = [
    {id: 254, fName: "Simon", lName: "Stirling", age: 18},
    {id: 111, fName: "Alon", lName: "Guy", age: 34},
    {id: 671, fName: "Bob", lName: "Piscapoe", age: 34},
    {id: 52, fName: "Jane", lName: "Doe", age: 52},
];

/*function displayLineForPerson(person){
    return (
        <tr key={person.id}>
            <td>{person.id}</td>
            <td>{person.fName}</td>
            <td>{person.lName}</td>
            <td>{person.age}</td>
        </tr>
    );
}*/

function MyDataTable() {
    const [people, setPeople] = useState([
                                            {id: 254, fName: "Simon", lName: "Stirling", age: 18},
                                            {id: 111, fName: "Alon", lName: "Guy", age: 34},
                                            {id: 671, fName: "Bob", lName: "Piscapoe", age: 34},
                                            {id: 52, fName: "Jane", lName: "Doe", age: 52},
                                        ]);
    const [counter, setCounter] = useState(0);
    
    

    const addPersonDirect = () => {
        // DONT USE THIS METHOD!!!!
        listOfPeople.push({id: 123, fName: "Emma", lName: "Smith", age: 25});
        console.log('Added person to list');
    };

    const addPersonToState = () => {
        setPeople([
            ...people,
            {id: 123, fName: "Emma", lName: "Smith", age: 25}
        ]);
    };

    const addToCounter = () => {
        setCounter(counter + 1);
    };

    return (
        <>  
            <div>
                Counter: {counter}
            </div>
            <h2>My people:</h2>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>First name</td>
                        <td>Last name</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>
                    {/* {listOfPeople.map(displayLineForPerson)} */}
                    {/*
                        listOfPeople.map((person) => (
                            <tr key={person.id}>
                                <td>{person.id}</td>
                                <td>{person.fName}</td>
                                <td>{person.lName}</td>
                                <td>{person.age}</td>
                            </tr>
                        ))
                        */}
                        {
                            // listOfPeople.map((person) => (
                            //     <MyDataRow id={person.id} fName={person.fName} lName={person.lName} age={person.age} />
                            // ))

                            // listOfPeople.map((person) => (
                            //     <MyDataRow {...person} />
                            // ))

                            people.map((person) => (
                                <MyDataRow key={person.id} person={person} />
                            ))
                        }
                </tbody>
            </table>
            
            
            <button onClick={addPersonDirect}>
                {/* DONT USE THIS METHOD!!!! */}
                Add person direct
            </button>

            <button onClick={addPersonToState}>
                Add person to state
            </button>
            <br />
            <button onClick={addToCounter}>
                Add to counter
            </button>
        </>        
    );
}

export default MyDataTable