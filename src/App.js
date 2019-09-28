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
      <div className="header">
        <h1>Recipe App</h1>
        <form className="form" onSubmit={getSearch}>
          <input className="search" type="text" value={search} onChange={searchVal}/>
          <button className="btn" type="submit">Search</button>
        </form>
      </div>
      <div className="recipes">
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
    </div>
  );
}

export default App;
