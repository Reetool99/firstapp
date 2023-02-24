import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Axiospost() {
    const [data, setData] = useState();
    useEffect(() => {
        axios.post("https://jsonplaceholder.typicode.com/users", {
            name: 'Reetool',
            city: 'GuptaSeher'
        })
            .then(Response => {
                setData(Response.data);
            })

    }, [])
    console.log(data)

    return (
        <div>
            <h1>axiospost</h1>
        </div>
    )
}
