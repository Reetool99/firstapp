import React, { memo } from 'react'

function Cllbacks(props) {

    console.log("callbacks render")
    return (
        <div>
            <h1> child callbacks {props.counttwo}  </h1>

        </div>
    )
}

export default Cllbacks