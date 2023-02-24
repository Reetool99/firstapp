
import React, { useEffect, useState } from "react";
import axios from 'axios'
function Axios() {
    const [info, setInfo] = useState([]);
    // const [load, setLoad] = useState(false);
    // const [err, setErr] = useState('')

    // axios.get("https://run.mocky.io/v3/6c81f135-7901-4d20-9bd2-297d04a7bbcd")
    // axios.get("https://run.mocky.io/v3/de54bcc6-ef0b-42de-b96f-93fe26545006")
    axios.get("https://run.mocky.io/v3/06e9126f-c6b9-4ad2-a6ed-9eb9f5c8f95e")
        .then(response => {
            setInfo(response.data.employees.employee);
        })


    function fetch() {
        window.location.reload()
    }

    return (
        <div>
            <button onClick={fetch}>fetch</button>
            <table className="table_axios">
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>ID</th>
                    {/* <th>Age</th> */}
                    {/* <th>Salary</th> */}
                    {/* <th>Company</th> */}
                </tr>
                {info.map(value => {
                    return (
                        <tr>
                            <td className="td_name" key={value.id}>{value.firstName}</td>
                            <td>{value.lastName}</td>
                            <td>{value.id}</td>
                            {/* <td>{value.age}</td> */}
                            {/* <td>{value.salary}</td> */}
                            {/* <td>{value.company}</td> */}
                        </tr>
                    )
                })}
            </table>
        </div>
    )



}

export default Axios;