import './component.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams,useNavigate, Link } from 'react-router-dom';

import Title from './Title'
import IngrdientsCheck from './IngredientsCheck';
import Instructions from './Instructions';

function DetailView() {

  const url = "http://localhost:3003/v1/1/meals/";
  let resp;

  let params = useParams();
  const [recipe, setRecipe] = useState([]);

  useEffect(()=>{
    async function fetchRecipe(){
      resp = await axios.get(`${url}${params.id}`); 
      console.log(resp.data);
      setRecipe(resp.data[0]);
    }
    fetchRecipe();
  },[]);

  return (
    <>
      <Title recipe={recipe}/>
      <IngrdientsCheck recipe={recipe} />
      <Instructions recipe={recipe} />
    </>
  );
}

export default DetailView;