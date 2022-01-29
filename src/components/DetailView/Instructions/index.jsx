import './component.css';

import { useParams,useNavigate, Link } from 'react-router-dom'; 

function Instructions({recipe}) {
  console.log(recipe);
  
  return (
    <>
      {recipe.strYoutube && 
      <div className='recipe-instructions'>
        <h1>Instrucciones</h1>
        <iframe width="427" height="240" src={recipe.strYoutube.split('watch?v=').join('embed/')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
        {recipe.strInstructions.replace(/[()]/g,'').split('.').map((instruction, i)=>
        <p>{instruction ? `${i+1}. ${instruction}`: ''}</p>)}
      </div>}
    </>);
}

export default Instructions;