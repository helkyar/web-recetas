import './component.css';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Recipe() {
  const url = "http://www.themealdb.com/api/json/v1/1/";
  let resp;

  const [recipes, setRecipes] = useState([]);
  let params = useParams();

  useEffect(()=>{
    async function fetchRecipes(){
      if (params.type == "search"){
        resp = await axios.get(url+"search.php?f="+params.search);
      } else if (params.type == "new") {
        resp = await axios.get(url+"filter.php?i="+params.search)
      }
      setRecipes([...resp.data.meals])
      console.log(recipes);
    }
    fetchRecipes();
  },[])

  return (
    <>
    {recipes.map((recipe)=><img src={recipe.strMealThumb} key={recipe.idMeal} alt={recipe.strMealThumb}/>)}
    {/* Bucle que renderiza Recipes según la info pescada */}
    {console.log(recipes)}
    </>);
}

export default Recipe;