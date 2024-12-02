import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";

function User() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("./data.json")
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    if (!data)
    {
        return <p>Loading...</p>;
    }

    return(
        <div>
            <Navbar/>
            <h1> User </h1>
            <ul>
                {data.map(item => (
                    <div key={item.id}>
                        ID : {  item.id}
                        <br/>
                        Nama : {item.nama}
                        <br/>
                        Desc : {item.description}
                        <br/>
                        <br/>

                    </div>
                ))}
                
            </ul>
        </div>
    );
}

export default User;