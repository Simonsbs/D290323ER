import { useEffect, useState } from "react";

function GitHub(){
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://api.github.com/users/simonsbs')
            .then((response) => response.json())
            .then((data) => setData(data))
    }, []);

    if(data == null){
        return (<>No data yet</>);
    }
    return (
        <>
            <h2>Github API data</h2>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            Login: {data.login}<br/>
            <a href={data.url}>Link</a><br/>
        </>
    );
}

export default GitHub;