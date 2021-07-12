import axios from "axios";
import React, { useEffect, useState } from "react"
import Card from "../../component/common/card/Card";
import Header from "../../component/common/header/Header";

function Movies(){
    const[movieData,setMovieData]=useState([]);

  useEffect(()=>{
      getMoviesdata()

  },[])

  const getMoviesdata=()=>{
      axios.get("https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre", {
      headers:{
        "x-rapidapi-key": "c275c2cfe0mshb43bce4c267e1ddp1f3eb5jsn7f88a6100493",
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "useQueryString": true
    },
    params:{
        "genre": "/chart/popular/genre/adventure"

    }

  })
  .then(response=>{
      setMovieData(response.data)
  })
  .catch(error=>console.log(error))





}
console.log(movieData)




    return(
    
    <div className="movies">
        {movieData.length>1 &&  ///because initial value of movie data is empty so we can not slice/split it will give an error
            Array(30).fill().map((item,index)=>(
            <Card key={movieData[index]}movieId={movieData[index]} imageUrl="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" year="2019" rating="11eeeeeeeeee5" />
            ))
        }

       
        
    
    </div>)
}

export default Movies;