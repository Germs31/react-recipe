import React, {useEffect, useState} from 'react';
import Recipe from './Recipe.js'
import logo from './logo.svg';
import './App.css';

const App = () => {

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('') 

  useEffect(() =>{
    getRecipes()
  }, [query])

  const searchVal = (e) =>{
    setSearch(e.target.value)
  }

  const getSearch = (e) =>{
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.APP_ID}&app_key=${process.env.API_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
  }

  return (
    <div className="App">
      <h1>Recipe App</h1>
      <form onSubmit={getSearch}>
        <input type="text" value={search} onChange={searchVal}/>
        <button type="submit">Search</button>
      </form>
      {
        recipes.map((r,i) => (
          <Recipe 
            key={i}
            title={r.recipe.label}
            calories={Math.round(r.recipe.calories)}
            image={r.recipe.image}
            ingredients={r.recipe.ingredients}
          />
        ))
      }
    </div>
  );
}

export default App;
