import React, {useState, useEffect} from 'react'
import axios from './axios'
import './Row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const base_url = "https://image.tmdb.org/t/p/original/"
const colorRating = () => {
    
}

const Row =({title, fetchUrl})=> {
    const [movies, setMovies] = useState([]) 
    const [trailerUrl, setTrailerUrl] = useState("")
    useEffect(()=> {
        async function fetchData(){
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results)
        return request;
        }
    fetchData()
    }, [fetchUrl])

    const opts = {
        height: '390',
        width: '100%',
        playerVars:{

            autoplay:1
        }
    }

    const handleClick = (movie) => {
        if(trailerUrl) {
            setTrailerUrl("")
        } else {
            movieTrailer(movie?.name || "" )
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search) 
              setTrailerUrl(urlParams.get('v'))  
            }).catch(error => console.log(error))
        }
    }

console.log(movies)

    return (
        <div className="row">
        <h2 >{title}</h2>
            {/* container */}
            <div className="row__posters">
                {
                    movies.map(movie =>(
                        <div>
                        <img
                        onClick ={()=> handleClick(movie)}
                        key={movie.id}
                        className="row__poster" 
                        src ={`${base_url}${movie.poster_path}`}
                        alt={movie.name}
                        />
                        <div className="row__ratingCircle">
                        <p style={{color:'white'}}>{movie.vote_average}</p>
                        </div>

                        
                        <p>{movie.title}</p>
                        <p>{movie.release_date}</p>
                        </div>
                    ))
                }
            </div>
            {
                trailerUrl &&   <YouTube videoId={trailerUrl} opts={opts}/>
            }
          
        </div>
    )
}

export default Row
