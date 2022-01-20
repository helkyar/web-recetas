import axios from "axios";
import { useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import React from "react";
import './component.css'

export function ListPage(){
    const url = "http://www.themealdb.com/api/json/v1/1/";
    let resp;
  
    const [categories, setCategories] = useState([]);
    let params = useParams();
  
    useEffect(()=>{
      async function fetchCategories(){
        if (params.type == "Beef"){
          resp = await axios.get(url+"search.php?s="+params.search);
        } else if (params.type == "Chicken") {
          resp = await axios.get(url+"filter.php?i="+params.search)
        }
        setCategories([...resp.data.categories])
        console.log(categories);
      }
      fetchCategories();
    },[])
  
    return (
      <>
      {categories.map((category)=>
        <div>
            <h3>{category.strCategory}</h3>
            <img src={category.strCategoryThumb} key={category.idCategory} alt={category.strCategory}/>
            <p>{category.strCategoryDescription}</p>
        </div>
        )}
      {/* Bucle que renderiza Categories según la info pescada */}
      {console.log(categories)}
      </>);
}
