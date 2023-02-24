import React, { forwardRef } from 'react'

function Frwrdref(props, ref) {

    return (
        <div>
            <h1 ref={ref} {...props}>hahhshsh</h1>
        </div>

    )
}

export default forwardRef(Frwrdref);