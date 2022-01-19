import axios from "axios";
import { useEffect, useState} from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';
import React from "react";
import './component.css'

export function ListPage(){
    const url = "http://www.themealdb.com/api/json/v1/1/";
    let resp;
  
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    let params = useParams();

    // Lista de posibles relaciones 
    //  (necesitan ser pescadas con axios o procesadas a partir de la respuesta)
  
  const tags = ['tag','tag','tag','tag']

  
    useEffect(()=>{
      async function fetchCategories(){
        if (params.type == "search"){
          resp = await axios.get(url+"categories.php"+params.search);
        } else if (params.type == "new") {
          resp = await axios.get(url+params.search)
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
          <section onClick={()=>navigate(`/${category.idCategory}`)}>
              <h3>{category.strCategory}</h3>
              <img src={category.strCategoryThumb} key={category.idCategory} alt={category.strCategory}/>
              <p>{category.strCategoryDescription}</p>
              <div>
              {tags.map((tag)=>
                <Link to={`/${tag}`}> {tag} </Link>
              )}
          </div>
            </section>
        </div>
        )}

      </>);
}
