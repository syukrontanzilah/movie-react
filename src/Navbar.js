import React, {useEffect, useState} from 'react'
import './Navbar.css'
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import LanguageRoundedIcon from '@material-ui/icons/LanguageRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { Avatar } from '@material-ui/core';

function Navbar() {

const [show, handleShow] = useState(false)

useEffect(()=>{
window.addEventListener("scroll", ()=> {
    if(window.scrollY > 250) {
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
                <div className="left__option">
                <p>Movies</p>
                </div>
                <div className="left__option">
                <p>TV Shows</p>
                </div>
                <div className="left__option">
                <p>People</p>
                </div>
                <div className="left__option">
                <p>More</p>
                </div>
                  
               </div>
           </div>

           <div className="nav__right">
           <div className="right__menu">
               <div className="button__right">
                    <AddRoundedIcon style={{height:30, width:30}} />
               </div>
               <div className="button__right">
                     <LanguageRoundedIcon/>
               </div>
               <div className="button__right">
                       <NotificationsRoundedIcon/>
               </div>
               <div className="button__right">
                         <Avatar style={{height:30, width:30}} src="https://cdn.idntimes.com/content-images/community/2019/10/1570055614033-instasave-b58e06413ecd31b1e0932e6374245076.jpg"/>
               </div>

               <div className="button__right">
                       <SearchRoundedIcon/>
               </div>
                  
               </div>
           </div>
        </div>
    )
}

export default Navbar
