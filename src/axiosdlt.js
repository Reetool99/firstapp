import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Axiosdlt() {
    const [dlt, setDlt] = useState([]);

    useEffect(() => {
        axios.get(`https://run.mocky.io/v3/c9bf04e5-ecae-4a5d-9026-c88f5d3b5816`)
            .then((response) => {
                setDlt(response.data)
            });
    }, [])


    function rmov() {
        axios.delete(`https://run.mocky.io/v3/c9bf04e5-ecae-4a5d-9026-c88f5d3b5816/1`)
            .then((response) => {
                setDlt(response.data)
            });
    }
    return (
        <div>
            <h1>Delete with axios </h1>
            <table>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>MOBILE</th>
                    <th>Button</th>
                </tr>
                {dlt.map(d => {
                    return (
                        <tr>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.email}</td>
                            <td>{d.mobile}</td>
                            <td><button onClick={rmov}>remove</button></td>
                        </tr>
                    )
                })}
            </table>

        </div>
    )
}
