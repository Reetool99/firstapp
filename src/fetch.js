import React, { useEffect, useState } from "react";

function Fetch() {
    const [info, setInfo] = useState([]);
    const [load, setLoad] = useState(false);
    const [err, setErr] = useState(null)

    useEffect(() => {

        fetch("https://run.mocky.io/v3/6c81f135-7901-4d20-9bd2-297d04a7bbcd")
            // fetch("https://run.mocky.io/v3/dd875345-9550-45aa-8e3f-0b294b17ddfb") // deep APIS

            .then(response => response.json())
            .then(response => {
                // console.log(response);
                setLoad(true);
                setInfo(response)
            })

            .catch(() => {
                setErr("error: not found api")
            });


    }, [])





    function refresh() {
        window.location.reload();
    }

    // console.log(info)
    if (err) {
        return (
            <div><h3>{err}</h3></div>
        )
    }
    else if (load === false) {
        return (
            <div>
                <h2>fetch loading</h2>
                <h3 className="loader"></h3>
            </div>
        )
    }

    else {
        return (
            <div>
                {/* <button onClick={refresh}>refresh</button> */}
                <h1> FETCH APIS </h1>
                <h3>FETCH APIS LOADED</h3>
                <button onClick={refresh}>refresh page</button>


                {/* <h3>Your fetch is loading...</h3> */}
                <ul className="fetch_ul">

                    {info.map(item => {
                        return (<li className="fetch_li" > {item.name},{item.age},{item.gender},{item.salary},{item.expense}</li>)
                        {/* return (<li className="fetch_li" > {item.firstName},{lastName}</li>) */ }
                    })}
                </ul>

            </div>
        )

    }






}

export default Fetch;