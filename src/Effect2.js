import React, { useEffect, useState } from 'react';

export default function Effect2() {
    const [width, setWidth] = useState(window.screen.width);

    function actualwidth() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', actualwidth);

        // return () => {
        //     window.removeEventListener('resize', actualwidth);
        // }
    })

    return (
        <div className="App">
            <h1>width size {width}</h1>

        </div>
    )

}