import axios from "axios";
import { useEffect } from "react";
import React from "react";

export function RecipeHighlights(){
    /* async function loadInfo (){

        const resp = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        let meal = resp.data.meal
        console.log(meal)
    }

    useEffect(loadInfo,[]);
 */




    let meal = [];
    useEffect(() => {

        async function fetchData(){
            const resp = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
            meal = resp.data.meal
            console.log(meal)
        }
        fetchData();
    }, []);
    
   
    

    let hightlights = meal.map((element)=> 
        <div>
            <h3>{element.meals.strMeal}</h3>
            <span>Categoría: </span><p>{element.meals.strCategory}</p>
            <div>
                <video src={element.meals.strYoutube} height="100px">
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
