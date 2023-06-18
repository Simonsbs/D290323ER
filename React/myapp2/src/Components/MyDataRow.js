function MyDataRow({person}){
    return(
        <tr key={person.id}>
            <td>{person.id}</td>
            <td>{person.fName}</td>
            <td>{person.lName}</td>
            <td>{person.age}</td>
        </tr>
    );
}

export default MyDataRow