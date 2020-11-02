import React from 'react'
import { Link } from "react-router-dom"


function UserPage() {
    return (
        <div>
            <h1>הגעת לאזור האישי שלך</h1>
            <Link to="/main"> <button>דף הבית</button></Link>
        </div>
    )
}

export default UserPage