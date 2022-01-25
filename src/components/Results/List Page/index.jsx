import axios from "axios";
import { useEffect, useState} from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';
import React from "react";
import './component.css'

export function ListPage(){
    const url = "http://www.themealdb.com/api/json/v1/1/";
    let resp;
  
    const navigate = useNavigate();
    const [mealsCategory, setMealCategory] = useState([]);
    const [mainCategory, setCategory] = useState([]);
   /*  const [mealOptions, setMealOptions] = useState([]); */

  
    let {category} = useParams();

   
    /*--UseEffect para título de categoría --*/


    useEffect(()=>{
      async function fetchCategory(){
        resp = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
     
      setCategory([...resp.data.categories])
    }
    fetchCategory();
    },[])

     /*--UseEffect para meals de categoria --*/

  
    useEffect(()=>{
      async function fetchMealCategory(){
          resp = await axios.get(`${url}filter.php?c=${category}`);
        setMealCategory([...resp.data.meals])
      }
      fetchMealCategory();
    },[])

    {
                                    
      /*--UseEffect para opciones de cada meal --*/

 /*      useEffect(()=>{
        async function fetchMealOptions(){
            resp = await axios.get(`${url}filter.php?c=${meal.idMeal}`);
            setMealOptions([...resp.data.meals])
        }
        fetchMealOptions();
      },[])
} */



     // Lista de posibles relaciones 
    // (necesitan ser pescadas con axios o procesadas a partir de la respuesta)
  
      
  const tags = ['tag','tag','tag','tag']


    const cateTitle = mainCategory.filter(title => title.strCategory == category)


    return (
    <>
    <div>
      {cateTitle.map((element)=>
        <div className="category-title">
          <div className="cat-image-section">
            <img src={element.strCategoryThumb} height="200px"></img>
          </div>
          <div className="cat-description">
            <h1>{element.strCategory}</h1>
            <p>{element.strCategoryDescription}</p>
          </div>
        </div>
      )}
    </div> 
    <div className="meal-section">
    {mealsCategory.map((meal)=>
        <div className="meal-item" onClick={()=>navigate(`/recipe/${meal.idMeal}`)}>
            <div>
               <img src={meal.strMealThumb} key={meal.strMealThumb} alt={meal.strMeal} className="meal-img"/>
            </div>
            <div className="meal-cat-description">
              <h3>{meal.strMeal}</h3>
              {tags.map((tag)=>
                <Link to={`/${tag}`}> {tag} </Link>
              )}
            </div>

        </div>        
        )}
    </div>
      </>);
  }
}
