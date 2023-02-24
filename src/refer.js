import React, { useRef } from "react";
import Frwrdref from "./frwrdref";
function Refer() {
    let Reference = useRef();
    // let refe1 = useRef();

    function submit() {
        // Reference.current.focus();
        Reference.current.style.color = "yellow";
        // refe1.current.style.color = "green";
    }
    return (<>

        <div>
            <h1 >Using Ref</h1>
            <p>hello </p>
            <input type="text" ref={Reference} />
            <button onClick={submit}>Submit</button>
            <Frwrdref ref={Reference} />
        </div>
    </>

    )
}

export default Refer;