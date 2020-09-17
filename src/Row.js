import React, {useState, useEffect, useRef} from 'react'
import axios from './axios'
import './Row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'


import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Button} from '@material-ui/core'

const base_url = "https://image.tmdb.org/t/p/original/"

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
        height: '350',
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


// handle modal
const classes = useStyles();
const [open, setOpen] = useState(false);
const handleOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};

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
                      
                        <p className="title__movie">{ movie.title}</p>
                         <p className="date__movie">{movie.release_date}</p>

                    <div className="date__rating">

                           <Button className={classes.button} type="button" onClick={handleOpen}>
                            detail
                            </Button>   
               
                    <div style={{backgroundColor:  movie.vote_average >= 8 ? "darkcyan" :'orange'}} className="row__ratingCircle">
                                    <p style={{color:'white', }}>{movie.vote_average*10 + "%"}</p>
                                    </div> 
                        </div>
                      
                     

                    {/* MODAL */}
                        <div>
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={classes.modal}
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                            timeout: 500,
                            }}
                        >
                            <Fade in={open}>
                            <div className={classes.paper}>
                                <div className={classes.content}>
                                    <img className={classes.poster} src = {`${base_url}${movie.poster_path}`}/>
                                    <div>
                                    <h2 className={classes.judul}  id="transition-modal-title">{movie.title}</h2>
                                            <p className={classes.desc} id="transition-modal-description">{movie.overview}</p>
                                            <p className={classes.desc}>User Score: {movie.vote_average*10 + "%"} </p>
                                            <p  className={classes.release}>Release: {movie.release_date}</p>
                                        </div>
                                </div>
                            </div>
                            </Fade>
                        </Modal>
                        </div>                

                    {/* END MODAL */}


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


const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: '#474747',
      border: '1px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width: '60%'
    },
    judul:{
        marginBottom:20,
        marginTop:20,
        color:'white'
    }, 
    poster: {
        width: 350,
        height: 450,
        marginRight: 20,
        marginBottom:20,
        marginTop:30
    },
    button :{
        backgroundColor:'lightblue',
        fontSize: 9,
    },
    content: {
        flexDirection:'row',
        display:'flex'
    },
    release:{
        color:'lightgray'
    },
    desc: {
        marginTop:30,
        color:'lightgray'
    },

  }));