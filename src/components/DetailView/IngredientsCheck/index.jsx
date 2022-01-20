import './component.css';

import { useParams,useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function IngrdientsCheck() {
  const totalingredients = 21;
  const url = "http://www.themealdb.com/api/json/v1/1/lookup.php?i=";
  let resp;
  let elements = [];

  const navigate = useNavigate();
  const [people, setPeople] = useState(1)
  const [recipe, setRecipe] = useState([]);
  const [ingredients, setingredients] = useState([]);
  let params = useParams();

  useEffect(()=>{
    async function fetchRecipe(){

      resp = await axios.get(`${url}${params.id}`); 
      setRecipe(resp.data.meals[0]);
      console.log(recipe);
      //Loop harcored to 21 because of api
      const response = resp.data.meals[0];
      for(let i = 1; i < totalingredients; i++){
        
        let ingr = response[`strIngredient${i}`];
        if (ingr == "" || ingr == undefined ) {break;}
        // Grap the measures and separate its numbers 
        elements.push([ingr, response[`strMeasure${i}`]]);
      }
      setingredients(elements);
    }
    fetchRecipe();
  },[])

  return (
    <>
      {recipe!=[] &&
      <div className='recipe'>
        <h1>{recipe.strMeal || 'Error con fetch'}</h1>
        <p>Personas: 
          <button onClick={()=>setPeople((p)=>p-=1)}>-</button> 
          {people >= 1 ? people : setPeople(1)} 
          <button onClick={()=>setPeople((p)=>p+=1)}>+</button></p>
        <section className='checklist'>
          {/* Save recipe changes, +/- buttons to ingredients, change ingredients */}
          {ingredients.map((ingredient, i)=>
            <div key={`check${i}`} className='check'>
              <input id={`check${i}`} type="checkbox"/>
              <label htmlFor={`check${i}`}> 
                {`${ingredient[0]} (${ingredient[1]} ${people > 1 ? 'x'+people:''})`} 
              </label>
            </div>
          )}
        </section>
      </div>}
    </>);
}

export default IngrdientsCheck;