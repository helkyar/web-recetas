import './component.css';

import { useParams,useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Recipe() {
  const url = "http://www.themealdb.com/api/json/v1/1/";
  let resp;

  const navigate = useNavigate();
  const [tags, setTags] = useState([])
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
    }
    fetchRecipes();
  },[])

  return (
    <>
    {recipes.map((recipe)=>
      <div key={recipe.idMeal} className='recipes-result'>
        <img src={recipe.strMealThumb} alt={recipe.strMealThumb}/>
        <section onClick={()=>navigate(`/recipe/${recipe.idMeal}`)}>
          <h1>{recipe.strMeal}</h1>
          <p> x minutos | x €/pers | x calorías </p>
          <p className='description'>{recipe.strInstructions}</p>
          <div className='points'>...</div>
          <div>
            {recipe.strTags && 
              recipe.strTags.split(',').map((tag, id)=>
              <Link key={`tag${id}`} to={`/recipes/tag/${tag}`}> {tag} </Link>)
            }
            
          </div>
        </section>
      </div>
    )}
    
    {console.log(recipes)}
    </>);
}

export default Recipe;