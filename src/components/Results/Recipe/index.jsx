import './component.css';

import { useParams,useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';



function Recipe() {
  const url = "http://localhost:3003/v1/1/";
  let resp;

  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const [isParamsArea,setIsParamsArea] = useState(false)
  
  
  let params = useParams();

  async function fetchRecipes(){
    if (params.type == "search"){
      resp = await axios.get(`${url}meals?f=${params.search}`);
      console.log(`${url}meals?f=${params.search}`);
      console.log(resp);

      setIsParamsArea(true)
    } else if (params.type == "new") {
      resp = await axios.get(`${url}meals?c=${params.search}`)
    }
    else if(params.type == "area") {
      resp = await axios.get(`${url}meals?a=${params.search}`)           
    }
    if(resp.data != undefined){
      setRecipes(resp.data)
    } 
  }
  
  useEffect(()=>{    
    fetchRecipes();
  },[params])

  if(recipes.length != 0){
    return (
    <> 
      {recipes.map((recipe)=>
      <div className='recipes-result'>
        <img src={recipe.strMealThumb} key={recipe.idMeal} alt={recipe.strMealThumb}/>
        <section onClick={()=>navigate(`/recipe/${recipe.idMeal}`)}>
          <h1>{recipe.strMeal}</h1>
          <p> x minutos | x €/pers | x calorías </p>
         {isParamsArea ? <><p className='description'>{recipe.strInstructions}</p>
          <div className='points'>...</div></> : null }
          <div>
          {recipe.strTags &&
          recipe.strTags.split(',').map((tag, id)=>
          <Link key={`title-tag${id}`} to={`/recipes/tag/${tag}`}> {tag} </Link>)}           
          </div>
        </section>
      </div>
    )}
    
    
    
    </>);
  } else {
    return <h4>Not results found</h4>
  }
  
}

export default Recipe;