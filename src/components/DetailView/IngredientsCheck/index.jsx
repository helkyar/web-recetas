import './component.css';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import People from './People';

function IngrdientsCheck({recipe}) {
  const totalingredients = 21;
  let elements = [];

  const navigate = useNavigate();
  const [people, setPeople] = useState(1)
  const [ingredients, setingredients] = useState([]);

  useEffect(()=>{
    for(let i = 1; i < totalingredients; i++){
        
      let ingr = recipe[`strIngredient${i}`];
      if (ingr == "" || ingr == undefined ) {break;}

      //Separate numbers from letters and multiply by {people}
      let measures = recipe[`strMeasure${i}`];
      let quantities = measures.split('/');
      let newMeasures = quantities.map((quantitie)=>{
        let numb = quantitie.match(/[0-9.,]+/g); 
        return quantitie.replace(/[0-9.,]+/g, (parseFloat(numb)*people).toFixed(1))
      })

      //Put it all together
      elements.push([ingr, newMeasures.join('/')]);
    }
    setingredients(elements);
  },[recipe, people])

  return (
    <>
      {recipe!=[] &&
      <div className='ingredients'>
        <People setpeople={{people, setPeople}}/>
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