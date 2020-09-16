import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">

            <div className="footer__row">
            <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            />
            <div className="hai">
            <h2>Hi syukron!</h2>
            </div>
            </div>


            <div className="footer__row">
            <h4>THE BASICS</h4>
            <p>About TMDB</p>
            <p>Contact Us</p>
            <p>Support Forums</p>
            <p>API</p>
            </div>



            <div className="footer__row">
            <h4>GET INVOLVED</h4>
            <p>Contribution Bible</p>
            <p>3rd Party Applications</p>
            <p>Add New Movie</p>
            <p>Add New TV Show</p>
            </div>


            <div className="footer__row">
            <h4>COMMUNITY</h4>
            <p>Guidelines</p>
            <p>Discussions</p>
            <p>Leaderboard</p>
            <p>Twitter</p>
            </div>


            <div className="footer__row">
            <h4>LEGAL</h4>
            <p>Terms of Use</p>
            <p>API Terms of Use</p>
            <p>Privacy Policy</p>
            <p>System Status</p>
            </div>
        </div>
    )
}

export default Footer
