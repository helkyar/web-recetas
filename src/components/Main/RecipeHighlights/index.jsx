import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

export function RecipeHighlights(){
    const [meals, setMeals] = useState([]);


    let meal = [];
    useEffect(() => {
        
        async function fetchData(){
            const resp = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
            meal = resp.data.meals
            setMeals(meal)
        }
        fetchData();
    }, []);
   
   
   
    

    let hightlights = meals.map((element)=> 
        <div>
            <h3>{element.strMeal}</h3>
            <span>Categoría: </span><p>{element.strCategory}</p>
            <div>
                <video src={element.strYoutube} height="100px">
                </video>
            </div>
         </div>
    )
    
    return (
        <div>
            {hightlights}
        </div>
       
    )

}
