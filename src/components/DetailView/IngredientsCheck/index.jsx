import './component.css';

import { useParams,useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function IngrdientsCheck() {
  const url = "http://www.themealdb.com/api/json/v1/1/lookup.php?i=";
  let resp;

  const navigate = useNavigate();
  const [recipe, setRecipe] = useState([]);
  let params = useParams();

  useEffect(()=>{
    async function fetchRecipe(){
      resp = await axios.get(url+params.id); 
      setRecipe(resp.data.meals[0]);
      console.log(recipe);
    }
    fetchRecipe();
  },[])

  //Loop through ingredients and quantities strIngridient1-x strMeasure1-x

  return (
    <>
      {recipe!=[] && 
      <div className='recipe'>
        <h1>{recipe.strMeal || 'Error con fetch'}</h1>
        <p>pio pio</p>
        <section>
          Checklist
          {console.log(recipe)}
        </section>
      </div>}
    </>);
}

export default IngrdientsCheck;