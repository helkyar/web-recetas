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
      </div>}
    </>);
}

export default Title;