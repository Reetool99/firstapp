import axios from 'axios'
import React, { useEffect, useState } from 'react'

const codeURL = "https://jsonplaceholder.typicode.com/posts";

function Axiospost2() {
    const [value, setValue] = useState(null)
    useEffect(() => {
        axios.get(`${codeURL}`).then((response) => {
            setValue(response.data)
        })
    }, [])


    function click() {
        axios.post(codeURL, {
            name: 'Reetool',
            city: 'GuptaSeher'
        })
            .then((response) => {
                setValue(response.data);
            })
    }
    if (!value) return "no post"
    return (
        <div>
            <h1>Axiospost2</h1>
            <h2>{value.name}</h2>
            <h3>{value.city}</h3>
            <button onClick={click}>click me </button>
        </div>


    )
}

export default Axiospost2