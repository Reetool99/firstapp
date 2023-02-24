import React, { useMemo, useState } from "react";

function Memo() {

    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10);

    const multiMemo = useMemo(function multicount() {
        console.warn("multicount")
        return count * 5
    }, [count])

    // const multiMemo = useMemo(() => first, [second])

    return (
        <div className="App">
            <h1>useMemo hook</h1>
            <h2>count : {count}</h2>
            <button onClick={() => setCount(count + 1)}>update count</button>
            <h2>multicount:{multiMemo}</h2>
            <h2>Item : {item}</h2>
            <button onClick={() => setItem(item * 10)}>update item</button>
        </div>
    )
}
export default Memo;