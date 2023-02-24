import React, { useContext } from 'react'
import AppContext from './usecontext';

export default function ScondContxt() {
    const appContextValues = useContext(AppContext)
    let age = 14;
    // console.warn(color);
    return (
        <div>
            <h1 style={{ color: appContextValues.color }}>this is child component {appContextValues.fname}{appContextValues.arr[0]} {appContextValues.showage(age)}</h1>
        </div>
    )
}
