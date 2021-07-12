import React from "react"


const LabelValue=({label,value})=>{


    return(
        <div className="label-value-container">
            <label> {label}</label>
            <p>{value}</p>

        </div>


    )




}

export default LabelValue;