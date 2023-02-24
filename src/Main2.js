import React, { useState } from 'react'
import Example from './Example'
import Main3 from './Main3';

function Main2() {
    let obj1 = {
        company: "spark18",
        work: "software developer"
    }
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("");
    const [data, setData] = useState("Rg")
    const [obj, setObj] = useState(obj1.company)
    function onChange() {
        setCount(count + 1)
        setColor("blue");
        setData("Ritul gupta")
        setObj(obj1.work);
    }
    return (
        <div className="App">
            <h1>{data}</h1>
            <h2>{obj}</h2>
            {/* <h2>Hello {props.name}</h2>
            <h3>address : {props.address}</h3> */}
            <h2 style={{ backgroundColor: color }}>{count}</h2>
            <button onClick={onChange}>click</button>
            <Example
                name={"retool"}
                address={"okhla"}
            />
            {/* <Main3 /> */}


        </div>
    )


}
export default Main2;