import './component.css';
import React from 'react';
import Globe from 'react-globe.gl';
import { RecipeHighlights } from './RecipeHighlights';
import defaultMarkers from "../../Data/markers.js";
import { useState } from "react";
import MapMenu from './Globe-menu';



export default function Main() {
  

  return (

    <div className='main'>
    <MapMenu/>
     
  <RecipeHighlights />
    </div>
 
  )
}
  


