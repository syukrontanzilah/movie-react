import React, {useState, useEffect} from 'react'
import axios from './axios'
import requests from './requests'
import './Banner.css'

function Banner() {
const [movie, setMovie] = useState([])

useEffect(()=> {
async function fetchData(){
    const request = await axios.get(requests.fetchNetflixOriginals)
    setMovie(
        request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
        ]
    )
    return request;
}
fetchData()
}, [])

console.log(movie)
    return (
       <header 
       style={{
           backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
           backgroundSize:'cover',
           backgroundPosition: "center center",
           
       }}
       className="banner">
           <div className="banner__contents">

  <h1>Welcome..</h1>
            <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
{/* <h2>
    {movie?.title|| movie?.name || movie?.original_name}
</h2> */}
            <div>
            <input style={{width:'80%'}} placeholder="Search for a movie, tv show, person ..."/>
            </div>

           </div>
           <div className="banner__fadebottom"/>
          
       </header>
    )
}

export default Banner
