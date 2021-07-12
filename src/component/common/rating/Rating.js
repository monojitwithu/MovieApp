import React, { useEffect, useState } from "react"
import {BsStarFill,BsStar,BsStarHalf} from "react-icons/bs"

const Rating=({rating})=>{
    const [star,setStar]=useState(rating?rating/2:0);

   
    return(
        <div className="rating">
            <label>Average User Rating</label>
            <div className="star-container">
                {Array(5).fill().map((item,index)=>{
                    
                    if(index+1<star) return <BsStarFill className="fill"/>
                    if(index+1>=star&&index+1<star+1){
                        return <BsStarHalf className="half"/>

                    }else if(index+1>star) return <BsStar className="empty"/>

                })}
                <h2>{star}/5</h2>

            </div>

        </div> 
    )
}



export default  Rating;