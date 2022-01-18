import './component.css';

import { useParams,useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Recipe() {
  const url = "http://www.themealdb.com/api/json/v1/1/";
  let resp;

  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  let params = useParams();

  // Lista de posibles relaciones 
  //  (necesitan ser pescadas con axios o procesadas a partir de la respuesta)
  const tags = ['tag','tag','tag','tag',]

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
    {recipes.map((recipe)=>
      <div className='recipes-result'>
        <img src={recipe.strMealThumb} key={recipe.idMeal} alt={recipe.strMealThumb}/>
        <section onClick={()=>navigate(`/recipe/${recipe.idMeal}`)}>
          <h1>{recipe.strMeal}</h1>
          <p> x minutos | x €/pers | x calorías </p>
          <p className='description'>{recipe.strInstructions}</p>
          <div className='points'>...</div>
          <div>
            {tags.map((tag)=>
              <Link to={`/recipes/ingridient/${tag}`}> {tag} </Link>
            )}
            
          </div>
        </section>
      </div>
    )}
    
    {console.log(recipes)}
    </>);
}

export default Recipe;