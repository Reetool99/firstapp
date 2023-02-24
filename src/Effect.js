import React, { useEffect, useState } from "react";

function Effect() {
    const [inc, setInc] = useState(0);
    function updation() {
        setInc(inc + 1)
    }
    useEffect(() => {
        console.log("mount")

        return () => {
            console.log("unmount");
        }
    }, [inc]);



    return (
        <div className="App">
            <h1>useEffect in React {inc}</h1>
            <button onClick={updation}>update</button>
        </div>
    )
}
export default Effect;