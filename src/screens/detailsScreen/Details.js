import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import {IoMdArrowRoundBack} from 'react-icons/io'
import LabelValue from '../../component/common/labelValue/LabelValue';
import Rating from '../../component/common/rating/Rating';


const Details=()=>{
    const [apicalled,setApiCalled]=useState(false);
    const[videoId,setVideoId]=useState();
    const [imageUrl,setImageUrl]=useState("");
    const [title,setTitle]=useState("");
    const[year,setYear]=useState("");
    const [rating,setRating]=useState("");
    const[plot,setPlot]=useState("");
    const [length,setLength]=useState("");
    
    const {movieId}=useParams();//by this we are getting the movie id after the clcik for//see controller Route for more underSatnding
    const history=useHistory();
    useEffect(()=>{
        getMoviesDetail(movieId)

    },[])
    const getMoviesDetail=(movieId)=>{
        axios.get(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${movieId}`,{
            headers:{
                'x-rapidapi-key': 'c275c2cfe0mshb43bce4c267e1ddp1f3eb5jsn7f88a6100493',
                'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com'

            }
        })
        .then((response)=>{
            const movieData=response.data;
            
            setVideoId(movieData.trailer.id)
            setRating(movieData.rating|| "N/A")
            setYear(movieData.year)
            setTitle(movieData.title)
            setImageUrl(movieData.poster)
            setPlot(movieData.plot)
            setLength(movieData.length)


            setApiCalled(true)
            

        })
        .catch(error=>console.log(error))


    }

    

    const defaultImage=()=>{
        setImageUrl("https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg")
    }
    const backClickHandler=()=>{
        history.push("/")


    }
    return (
        <div className="details-screen">
            <div className="back-button" onClick={backClickHandler}>
            <IoMdArrowRoundBack/>
            </div>
            { apicalled &&( 
                <>

                

            <div className="trailer-container">
                <video controls>
                    <source src={`https://imdb-video.media-imdb.com/${videoId}/1434659607842-pgv4ql-1618413460613.mp4?Expires=1625026442&Signature=NY9OsZyxc544bwizWPVaHQXYMKD0GW8ciepHJrYyYvDZ8~Aa~a6TWLmN20X0IwE3uHJ8f3CzPm-6GwuyjomcyS-ZDJx5sNn~JdUuAUq6sKsINlrcTtmUBj3qz6vOLCG6q-KjEMqAchllwCSOcz1lMDqbkpQ13jAdTpcyOoa2Ci1E5nS-X4BVd2SpSgL9l1kfweJ4gRbxaDN5sXN~mb3KT-OgiHLIHjD0Eth70b4lj3rcv2WDQCwrQtiPCBRQy9QQKhCQOZCO2lOJ2B3T4ztK7~Q9DB20vJMT8x9KouwN0tOGnfS-WLC0pQXJBgJr1sGAPouKQe8rNBlVa1KRaYei6A__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA`} type=""/>


                </video>

            </div>
            <div className="details-container">
                <div className="image-container">
                <img src={imageUrl} onError={defaultImage} alt="poster"/>


                </div>
                <div className="movie-details">
                    <div>
                        <LabelValue label="Title" value={title} />
                        <LabelValue label="Release Year" value={year} />
                        <LabelValue label="Length" value={length} />
                    </div>
                    <div className="rating">
                        <Rating rating={rating}/>

                    </div>

                </div>
                <div className="description">
                    <h5>About:</h5>
                    <p>{plot}</p>
                  
                </div>

            </div>
            </> 
            )}
        </div>
    )
}
export default Details;