import React, { useEffect, useState } from 'react'

export default function Delete() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch(`https://run.mocky.io/v3/c9bf04e5-ecae-4a5d-9026-c88f5d3b5816`)
            .then(response => response.json())
            .then(response => {
                setUser(response)
            })
    }, [])

    function dele(id) {
        fetch(`https://run.mocky.io/v3/c9bf04e5-ecae-4a5d-9026-c88f5d3b5816/posts/1`, {
            method: 'DELETE'
        }).then((result) => {
            result.json().then((response) => {
                console.warn(response);
            })
        })

    }
    return (
        <div>
            <h1>Delete Method</h1>
            <table>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>MOBILE</th>
                    <th>Button</th>
                </tr>
                {user.map(item => {
                    return (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                            <button onClick={dele}>Delete</button>
                        </tr>
                    )
                })}

            </table>
        </div>
    )
}
