import React, { Fragment } from 'react'

export default function Reconsilation() {
    const arr = [{ fname: "reetool", age: 23, lname: "gupta" },
    { fname: "samarth", age: 24, lname: "gupta" }]
    return (
        <Fragment>{
            arr.map((element, index) => {
                return (
                    <div>
                        <h1>{element.fname}{element.lname}</h1>
                    </div>
                )

            })
        }
        </Fragment>
    )
}
