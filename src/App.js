import React, {useEffect, useState} from 'react';
import Recipe from './Recipe.js'
import logo from './logo.svg';
import './App.css';

const App = () => {

  const [recipes, setRecipes] = useState([])

  useEffect(() =>{
    getRecipes()
  }, [])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${process.env.APP_ID}&app_key=${process.env.API_KEY}`)
    const data = await response.json()
    console.log(data)
    setRecipes(data.hits)
  }

  return (
    <div className="App">
      <h1>Recipe App</h1>
      <form>
        <input type="text"/>
        <button type="submit">Search</button>
      </form>
      {
        recipes.map(r => (
          <Recipe 
            title={r.recipe.label}
            calories={r.recipe.calories}
            image={r.recipe.image}
          />
        ))
      }
    </div>
  );
}

export default App;
