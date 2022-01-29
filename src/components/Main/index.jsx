import './component.css';
import React from 'react';

import { DropMenu } from './DropMenu';
import { RecipeHighlights } from './RecipeHighlights';


import MapMenu from './Globe-menu';



function Main() {
 

    return (
      <div className='main'>
        <MapMenu/>
        
          <DropMenu/>
          <RecipeHighlights />

    </div>
 
  )
}
  

export default Main

