import React, { useEffect, useRef, useState } from 'react'

export default function Put() {
    // const title = 'fetch put request example'
    const [fname, setFname] = useState([])
    // const refe = useRef();

    useEffect(() => {
        // show();
    }, [])
    function show() {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: 'fetch put request example' })
        }
        )
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
                setFname(data);
            })
    }
    function update() {
        // refe.current.innerHTML = "change put"
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: 'put is working properly' })
        }
        )
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
                setFname(data);
            })
    }
    return (
        <div>
            <h1>fetch Put</h1>
            <h2>{fname.title}</h2>
            <button onClick={show}>click me</button>
            <button onClick={update}>change</button>
        </div>
    )
}
