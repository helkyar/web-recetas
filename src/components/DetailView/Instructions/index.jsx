import './component.css';

import { useParams,useNavigate, Link } from 'react-router-dom'; 

function Instructions({recipe}) {
  console.log(recipe);
  
  return (
    <>
      <div className='recipe-instructions'>
        <h1>Instrucciones</h1>
        {/* <iframe width="427" height="240" src="https://www.youtube.com/embed/VVnZd8A84z4"            title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
        {recipe.strYoutube != undefined &&       
        <iframe width="427" height="240" src={recipe.strYoutube.split('watch?v=').join('embed/')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>}
        {recipe.strYoutube != undefined && console.log(recipe.strYoutube.split('watch?v=').join('embed/'))}      </div>
    </>);
}

export default Instructions;