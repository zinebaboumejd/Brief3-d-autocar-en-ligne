import React from "react"

fetch('http://localhost:5000/api')
.then((response) =>{
    console.log(response)
})

 const Api = () => {


    return (
        <div>
            <h1>API</h1>
            console.log(data)
        </div>
    )
}
export default Api