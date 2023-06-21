function MyDataRow({person: {id, fName, lName, age}}){
    return(
        <tr>
            <td>{id}</td>
            <td>{fName}</td>
            <td>{lName}</td>
            <td>{age}</td>
        </tr>
    );
}

export default MyDataRow