import React, { useEffect } from 'react';

let render = 0
function Child() {

    useEffect(() => {
        render++
    })

    return (
        <div>
            <h2> render : {render}</h2>
        </div>
    )
}
export default Child