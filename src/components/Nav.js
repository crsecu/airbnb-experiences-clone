import React from 'react';
import airbnbLogo from '../images/airbnb-logo.png'

export default function Nav() {
    return (
        <nav className = "navbar">
           <a href="https://airbnb.com">
            <img className = "navbar__logo" src={airbnbLogo} alt="Go to homepage"></img>
           </a>
        </nav>
    )
}