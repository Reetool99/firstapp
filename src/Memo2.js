import React, { useState, useMemo } from 'react';
import Child from './Memochild2'

function Memo2() {
    const [i, setI] = useState(0);

    function incrementI() {
        setI(i + 1);
    }

    const memorisedChild = useMemo(() => {
        return <Child></Child>
    }, [i])
    return (
        <div>
            <h3>UseMemo</h3>
            <h2>I : {i}</h2>
            <button onClick={incrementI}>Increment</button>
            <h3>normal render</h3>
            <Child></Child>
            <h3>Memo Child</h3>
            <h3>{memorisedChild}</h3>
        </div>
    )
}
export default Memo2;