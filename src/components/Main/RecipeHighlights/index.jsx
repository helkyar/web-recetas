import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import './component.css'

export function RecipeHighlights(){
    const [meals, setMeals] = useState([]);


    let meal = [];
    useEffect(() => {
        
        async function fetchData(){
            const resp = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
            meal = resp.data.meals
            setMeals(meal)
        }
        fetchData();
    }, []);
   
    let hightlights = meals.map((element)=> 
    <div>
        <div className="meal">
            <h3>{element.strMeal}</h3>
            <img src={element.strMealThumb} height='100px'></img>
         </div>
    </div>
        
    )
    
    return (
        <div className="meal-section">
            {hightlights}
        </div>
       
    )

}
