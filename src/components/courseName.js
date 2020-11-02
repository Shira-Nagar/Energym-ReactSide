import React from 'react'

function CourseName(props) {
    return (
<<<<<<< HEAD
        <div className="course">
=======
        <div className={props.course.id}>
>>>>>>> 36dd06b... update
            <h1>{props.course.name}</h1>
            <p>{props.course.discription}</p>
        </div>
    )
}

export default CourseName