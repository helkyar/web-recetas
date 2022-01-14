import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import './component.css'

export function ListPage(){
    const [categories, setCategory] = useState([]);


    let category = [];
    useEffect(() => {
        
        async function fetchData(){
            const resp = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            category = resp.data.categories
            setCategory(category)
        }
        fetchData();
    }, []);
   
    let selectedcategory = categories.map((element)=> 
    <div>
        <div>
            <h3>{element.strCategory}</h3>
            <img src={element.strCategoryThumb} height='100px'></img>
            <p>{element.strCategoryDescription}</p>
         </div>
    </div>
        
    )
    
    return (
        <div className="category-section">
            {selectedcategory}
        </div>
       
    )

}
