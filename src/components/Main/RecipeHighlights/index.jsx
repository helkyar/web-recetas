import axios from "axios";
import { useEffect, useState} from "react";
import { useNavigate} from 'react-router-dom';
import React from "react";
import './component.css'

export function RecipeHighlights(){
    const [meals, setMeals] = useState([]);
    const navigate = useNavigate();


    let meal = [];
    useEffect(() => {
        
        async function fetchData(){
            const resp = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            meal = resp.data.meals
            setMeals(meal)
        }
        fetchData();
    }, []);
   
    let hightlights = meals.map((element)=> 
    <div  className="meal-high-section" >
        <div>
            <video width="320" height="240" poster={element.strMealThumb}>
            <source src={element.strYoutube} type="video/mp4"></source>
            </video>
        </div>
        <div className="meal-instruction">
            <h3 onClick={()=>navigate(`/recipe/${element.idMeal}`)}>{element.strMeal}</h3>
            <p>{element.strInstructions}</p>
            <div className="meal-opt">
            <b>Category:</b><span onClick={()=>navigate(`categories/${element.strCategory}`)}> {element.strCategory}</span>
            <b>Area:</b><span onClick={()=> navigate(`/recipes/area/${element.strArea}`)}> {element.strArea}</span>

            </div>
        </div>
       
    </div>
        
    )
    
    return (
        <div>
            <h2>Last recipes</h2>
            <div  className="highlights">{hightlights}
            </div> 
        </div>
       
    )

}
