import './component.css';

import { useParams,useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';



function Recipe() {
  const url = "http://www.themealdb.com/api/json/v1/1/";
  let resp;

  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const [isParamsArea,setIsParamsArea] = useState(false)
  
  
  let params = useParams();
  

  // Lista de posibles relaciones 
  //  (necesitan ser pescadas con axios o procesadas a partir de la respuesta)

  const tags = ['tag','tag','tag','tag',]

  async function fetchRecipes(){
    if (params.type == "search"){
      resp = await axios.get(url+"search.php?s="+params.search);
      setIsParamsArea(true)
    } else if (params.type == "new") {
      resp = await axios.get(url+"filter.php?i="+params.search)
    }
    else if(params.type == "area") {
      resp = await axios.get(url+"filter.php?a="+params.search)
      
      
      
    }
    if(resp.data.meals != undefined){
      setRecipes(resp.data.meals)
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
            {tags.map((tag)=>
              <Link to={`/recipes/ingridient/${tag}`}> {tag} </Link>
            )}
            
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