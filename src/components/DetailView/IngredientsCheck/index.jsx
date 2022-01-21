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
    }
    fetchRecipe();
  },[])

  useEffect(()=>{
    for(let i = 1; i < totalingredients; i++){
        
      let ingr = recipe[`strIngredient${i}`];
      if (ingr == "" || ingr == undefined ) {break;}

      //Separate numbers from letters and multiply by {people}
      let measures = recipe[`strMeasure${i}`];

      let quantities = measures.split('/');
      let newMeasures = quantities.map((quantitie)=>{
        let numb = quantitie.match(/[0-9.,]+/g); 
        return quantitie.replace(/[0-9.,]+/g, parseFloat(numb)*people)
      })

      //Put it all together
      elements.push([ingr, newMeasures.join('/')]);
    }
    setingredients(elements);
  },[recipe, people])

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
                {`${ingredient[0]} (${ingredient[1]})`} 
              </label>
            </div>
          )}
        </section>
      </div>}
    </>);
}

export default IngrdientsCheck;