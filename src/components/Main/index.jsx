import './component.css';
import React from 'react';
import Globe from 'react-globe.gl';
import {DropMenu} from './DropMenu';
import { RecipeHighlights } from './RecipeHighlights';
import defaultMarkers from "../../Data/markers.js";
import { useState } from "react";


function markerTooltipRenderer(marker) {
  return `CITY: ${marker.city} (Value: ${marker.value})`;
}

const options = {
  markerTooltipRenderer
};

function Main() {
  const randomMarkers = defaultMarkers.map((marker) => ({
    ...marker,
    value: Math.floor(Math.random() * 100)
  }));
  const [markers, setMarkers] = useState([]);
  const [event, setEvent] = useState(null);
  const [details, setDetails] = useState(null);
  function onClickMarker(marker, markerObject, event) {
    setEvent({
      type: "CLICK",
      marker,
      markerObjectID: markerObject.uuid,
      pointerEventPosition: { x: event.clientX, y: event.clientY }
    });
    setDetails(markerTooltipRenderer(marker));
  }
  function onDefocus(previousFocus) {
    setEvent({
      type: "DEFOCUS",
      previousFocus
    });
    setDetails(null);
  }



  return (

    <div className='main'>
      <div className='markers'>
        <button onClick={() => setMarkers(randomMarkers)}>
          Randomize markers
        </button>
        <button disabled={markers.length === 0} onClick={() => setMarkers([])}>
          Clear markers
        </button>
        <button
          disabled={markers.length === randomMarkers.length}
          onClick={() =>
            setMarkers([...markers, randomMarkers[markers.length]])
          }
        >
          Add marker
        </button>
        <button
          disabled={markers.length === 0}
          onClick={() => setMarkers(markers.slice(0, markers.length - 1))}
        >
          Remove marker
        </button>
      </div>
      
      <Globe
      height="100vh"
      markers={markers}
      options={options}
      width="100vw"
      onClickMarker={onClickMarker}
      onDefocus={onDefocus}

      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
    

  />
  <DropMenu/>
  <RecipeHighlights />
    </div>
 
  );
}





export default Main

