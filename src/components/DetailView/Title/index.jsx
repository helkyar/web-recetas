import './component.css';

import { Link } from 'react-router-dom';

function Title({recipe}) {
  
  return (
    <>
       <div className='recipe-title'>       
    
        <h1>{recipe.strMeal || '404 Recipe not Found'}</h1>
        <img src={recipe.strMealThumb} alt={`foto de ${recipe.strMeal}`} />
        <nav>        
          {recipe.strTags &&
          recipe.strTags.split(',').map((tag, id)=>
          <Link key={`title-tag${id}`} to={`/recipes/tag/${tag}`}> {tag} </Link>)}
        </nav>
      </div>
    </>);
}

export default Title;