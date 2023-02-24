import React, { useState } from 'react'
import ScondContxt from './scondcontxt';
import AppContext from './usecontext';

export default function FirstContxt() {
    let obj = {
        fname: "ritul",
        lname: 'gupta'
    }
    const [color, setColor] = useState('red');
    const arr = [4, 5];

    const showage = (age) => {
        return age;
    }
    // function Onchange() {
    //     setColor("green");
    // }
    return (
        <>
            <AppContext.Provider value={{ obj, color, arr, showage }}>
                <ScondContxt></ScondContxt>
                {/* <button onClick={Onchange}> click me</button> */}
                <h1>hello</h1>
            </AppContext.Provider>
        </>

    )
}
