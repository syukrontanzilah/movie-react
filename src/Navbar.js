import React, {useEffect, useState} from 'react'
import './Navbar.css'

function Navbar() {

const [show, handleShow] = useState(false)

useEffect(()=>{
window.addEventListener("scroll", ()=> {
    if(window.scrollY > 200) {
handleShow(true)
    }else handleShow(false);
})
return () => {
    window.removeEventListener("scroll")
}
    }, [])


    return (
        <div className={`nav ${show && "nav__white"}`}>
           <div className="nav__left">
               <img
               className="nav__logo"
            //    style={{height:40, width:150}} 
               src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
               alt="TMDB"
               />

               <div className="left__menu">
                   <p style={{color:'white'}}>Movies</p>
                   <p>TV Shows</p>
                   <p>People</p>
                   <p>More</p>
               </div>
           </div>

           <div className="nav__right">
           <div className="right__menu">
                   <p>Movies</p>
                   <p>TV Shows</p>
                 
               </div>
           </div>
        </div>
    )
}

export default Navbar
