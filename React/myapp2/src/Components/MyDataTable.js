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
    return (
        <>
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
                            listOfPeople.map((person) => (<MyDataRow person={person}/>))
                        }
                </tbody>
            </table>
        </>        
    );
}

export default MyDataTable