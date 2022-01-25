import './component.css';

import { useParams,useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Title({recipe}) {
  return (
    <>
      {recipe!=[] &&
      <div className='recipe-title'>
        <h1>{recipe.strMeal || '404 Recipe not Found'}</h1>
        <img src={recipe.strMealThumb} alt={`foto de ${recipe.strMeal}`} />
        {recipe.strTags && recipe.strTags.split(',').map((tag, id)=>
          <Link key={`tag${id}`} to={`/recipes/tag/${tag}`}> {tag} </Link>)}
      </div>}
    </>);
}

export default Title;