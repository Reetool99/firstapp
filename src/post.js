import React, { useState } from 'react'

export default function Post() {

    const [firstname, setFirstname] = useState()
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();

    function submit() {
        // setFirstname(e.target.value)
        console.warn({ firstname, email, mobile })
        let data = { firstname, email, mobile };
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                'accept': "application / json",
                'content-type': "application/json"

            }, body: JSON.stringify(data)

        }).then((response) => {
            console.warn(response)
        });
    }

    return (
        <div>
            <input type="text" name='name' value={firstname} onChange={(e) => { setFirstname(e.target.value); }} placeholder='name' />

            <br />
            <br />

            <input type="text" name='email' value={email} onChange={(e) => { setEmail(e.target.value); }} placeholder='email' />

            <br />
            <br />

            <input type="text" name='mobile' value={mobile} onChange={(e) => { setMobile(e.target.value); }} placeholder='mobile number' />
            <br />
            <br />

            <button onClick={submit}>Submit</button>

        </div>
    )
}
