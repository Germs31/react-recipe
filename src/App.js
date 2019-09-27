import React, {useEffect, useState} from 'react';
import Recipe from './Recipe.js'
import logo from './logo.svg';
import './App.css';

const App = () => {

  useEffect(() =>{
    getRecipes()
  }, [])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${process.env.APP_ID}&app_key=${process.env.API_KEY}`)
    const data = await response.json()
    console.log(data)
  }

  return (
    <div className="App">
      <h1>Recipe App</h1>
      <form>
        <input type="text"/>
        <button type="submit">Search</button>
      </form>
      <Recipe/>
    </div>
  );
}

export default App;
