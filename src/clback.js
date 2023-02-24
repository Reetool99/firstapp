import React, { useCallback, useState } from 'react'
import Cllbacks from './cllbacks';


export default function Clback() {

    const [count, setCount] = useState(0);
    const [counttwo, setCounttwo] = useState(0);

    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        setCounttwo(counttwo + 1)
    }

    const func = useCallback(() => {
        console.log("Hello ritul")
    }, [counttwo])

    return (
        <div>
            <Cllbacks counttwo={counttwo} func={func} />
            <h1>call back {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}
