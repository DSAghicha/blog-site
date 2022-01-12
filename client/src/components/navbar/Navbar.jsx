import './navbar.scss'
import React from 'react'

const Navbar = () => {
    return (
        <nav id='navbar'>
            <div className="left-cr">
                <a href="/">BlogSite</a>
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>My Posts</li>
                <li>Log Out</li>
            </ul>
        </nav>
    )
}

export default Navbar
