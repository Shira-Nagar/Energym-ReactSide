import React from 'react'
import CourseName from './courseName';

function Main() {
    return (
        <div>
            <h2 className="div2">Harder.Faster.Stronger</h2>
            <CourseName course={{ id: "div3", name: "יוגה", discription: "שיעור המתנהל בקצב רגוע תוך עבודת שרירים מאומצת." }} />
            <CourseName course={{ id: "div4", name: "זומבה", discription: "שיעור המשלב ריקוד והתעמלות בנוסף לשריפת קלוריות רבה." }} />
            <CourseName course={{ id: "div5", name: "אירובי", discription: ".בואו לשיעור חוויתי ומלא אנרגיה! יעיל במיוחד לשריפת קלוריות" }} />
        </div>
    );
}

export default Main;