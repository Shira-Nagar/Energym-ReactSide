import React from 'react';
import './compStyle.css'
import { Link } from "react-router-dom"


function Header() {
    return (
        <nav className="div1">
            <h1 className="moto">Energym</h1>
            <Link to="/signIn"> <button>כניסה</button> </Link>
            <Link to="/signUp"> <button>הרשמה</button> </Link>
        </nav>
    )
}

export default Header;