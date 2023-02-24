import React, { useState } from 'react';

function Main3() {
    const [fname, setFname] = useState("samarth");

    // function change() {
    //     setFname("samarth gupta");
    // }
    return (
        <div className="App">
            <h1>{fname}</h1>

        </div>
    )
}

export default Main3; 