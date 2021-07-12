import axios from "axios"
import React, { useEffect, useState } from "react"
import {AiFillStar} from 'react-icons/ai'
import { useHistory } from "react-router-dom";



const Card =({movieId})=>{
    const [imageUrl,setImageUrl]=useState("");
    const [title,setTitle]=useState("");
    const[year,setYear]=useState("");
    const [rating,setRating]=useState("");
    const history=useHistory();
    


     
    

    useEffect(()=>{
        getMoviesDetail(movieId.split("/")[2])///getiing the title number
        
    },[])

    const getMoviesDetail=(id)=>{
        axios.get(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${id}`,{
            headers: {"x-rapidapi-key": "c275c2cfe0mshb43bce4c267e1ddp1f3eb5jsn7f88a6100493",
            "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
            "useQueryString": true}
        })
        .then((response)=>{
            const movieData=response.data;
            setRating(movieData.rating|| "N/A")
            setYear(movieData.year)
            setTitle(movieData.title)
            setImageUrl(movieData.poster)


        })
        .catch((err)=>console.log(err))
    }
    const defaultImage=()=>{
        setImageUrl("https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg")
    }
    const redirectToDetailsPage=()=>{
        history.push(`/movies/${movieId.split("/")[2]}`)
    }

    

    return(
        <div className="card" onClick={redirectToDetailsPage}>
            <div className="image-container">
                <img src={imageUrl} onError={defaultImage} alt="poster"/>

            </div>
            <div>
            <h4>{title}</h4>
            <div className='year-rating-container'>
            <p>{year}</p>
            <p><AiFillStar/>{rating}</p>
            </div>
            </div>
             

        </div>
    )
    }



export default Card;