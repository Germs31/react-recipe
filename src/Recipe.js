import React from 'react'
import './App.css';


const Recipe = ({title, calories, image, ingredients}) => {
    return(
        
            <div className="card">
                <h1>{title}</h1>
                <p>{calories} calories</p>
                <img src={image}/>
                <ul>
                    {ingredients.map((ing, i) =>(
                        <li key={i}>{ing.text}</li>
                    ))}
                </ul>
            </div>
    )
}

export default Recipe;