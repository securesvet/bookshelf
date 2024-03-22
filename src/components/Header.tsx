import React from "react"
import './Header.css'


const Header = () => {
    return (
        <header className="header-container">
            <ul className="flex header-list">
                <li>MUR.</li>
                <li>
                    <div className="right-header-wrapper">
                        <a>Sign In</a>
                        <a>Sign Up</a>
                    </div>
                </li>
            </ul>
        </header>
    )
}

export default Header;