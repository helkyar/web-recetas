import React from 'react';
import './component.css'
import {
    ComposableMap,
    Geographies,
    Geography,
    Sphere,
    Marker,
    ZoomableGroup
  } from "react-simple-maps";
import { useNavigate } from 'react-router-dom';
  

  const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  const MapMenu = () => {
      const navigate = useNavigate()
    return (
        <ComposableMap projectionConfig={{ scale: 120 }}>
             
      <Sphere stroke="#fff" strokeWidth={2} />
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
        }
      </Geographies>
      <Marker  onClick={()=> navigate('/area/Canadian')} coordinates={[-112.54004684375,58.3005793686594]}>
      <circle r={2} fill="#F53" />
      <text textAnchor="middle" fill="#F53">
          Canada
        </text>
      </Marker>
      <Marker  onClick={()=> navigate('/area/American')} coordinates={[-103.97071090625,44.14048372285979]}>
      <circle r={2} fill="#F53" />
      <text textAnchor="middle" fill="#F53">
          United State
        </text>
      </Marker>
      <Marker  onClick={()=> navigate('/area/British')} coordinates={[-1.3584062187500212,53.007885585555336]}>
      <circle r={2} fill="#F53" />
      <text textAnchor="middle" fill="#F53">
          United Kingdom
        </text>
      </Marker>
      <Marker  onClick={()=> navigate('/area/Chinese')} coordinates={[100.99022659374998,36.520289059213525]}>
      <circle r={2} fill="#F53" />
      <text textAnchor="middle" fill="#F53">
          China
        </text>
      </Marker>
      <Marker  onClick={()=> navigate('/area/Croatian')} coordinates={[15.780265656249979,45.33250431082183]}>
      <circle r={2} fill="#F53" />
      <text textAnchor="middle" fill="#F53">
          Croacia
        </text>
      </Marker>
      <Marker  onClick={()=> navigate('/area/Dutch')} coordinates={[9.935539093749979,50.84553688432524]}>
      <circle r={2} fill="#F53" />
      <text textAnchor="middle" fill="#F53">
          Germany
        </text>
      </Marker>
      <Marker  onClick={()=> navigate('/area/Egyptian')} coordinates={[29.31542190624998,26.352069431602366]}>
      <circle r={2} fill="#F53" />
      <text textAnchor="middle" fill="#F53">
          Egypt
        </text>
      </Marker>
      <Marker  onClick={()=> navigate('/area/French')} coordinates={[2.816398468749979,46.31815093134839]}>
      <circle r={2} fill="#F53" />
      <text textAnchor="middle" fill="#F53">
          France
        </text>
      </Marker>
      <Marker  onClick={()=> navigate('/area/Greek')} coordinates={[22.28417190624998,39.23613763701819]}>
      <circle r={2} fill="#F53" />
      <text textAnchor="middle" fill="#F53">
          Greece
        </text>
      </Marker>
      <Marker  onClick={()=> navigate('/area/Indian')} coordinates={[77.96288284374998,22.113189687790715]}>
      <circle r={2} fill="#F53" />
      <text textAnchor="middle" fill="#F53">
          India
        </text>
      </Marker>
      <Marker  onClick={()=> navigate('/area/Irish')} coordinates={[-8.038093718750021,53.23205885884455]}>
      <circle r={2} fill="#F53" />
      <text textAnchor="middle" fill="#F53">
          Ireland
        </text>
      </Marker>
      <Marker  onClick={()=> navigate('/area/Italian')} coordinates={[12.835929718749979,42.95004182305839]}>
      <circle r={2} fill="#F53" />
      <text textAnchor="middle" fill="#F53">
          Italy
        </text>
      </Marker>
      <Marker  onClick={()=> navigate('/area/Jamaican')} coordinates={[-77.21898805,18.02319306712393]}>
      <circle r={2} fill="#F53" />
      <text textAnchor="middle" fill="#F53">
          Jamaica
        </text>
      </Marker>
      <Marker  onClick={()=> navigate('/area/Japanese')} coordinates={[137.5417541375,35.857937466535084]}>
      <circle r={2} fill="#F53" />
      <text textAnchor="middle" fill="#F53">
          Japan
        </text>
      </Marker>
      <Marker  onClick={()=> navigate('/area/Mexican')} coordinates={[-102.57543336250001,22.56334527481508]}>
      <circle r={2} fill="#F53" />
      <text textAnchor="middle" fill="#F53">
          México
        </text>
      </Marker>
      <Marker  onClick={()=> navigate('/area/Moroccan')} coordinates={[-8.312738050000013,31.252774363569248]}>
      <circle r={2} fill="#F53" />
      <text textAnchor="middle" fill="#F53">
          Morroco
        </text>
      </Marker>
      <Marker  onClick={()=> navigate('/area/Russian')} coordinates={[93.68433226249999,66.04258882989454]}>
      <circle r={2} fill="#F53" />
      <text textAnchor="middle" fill="#F53">
          Russia
        </text>
      </Marker>
      <Marker  onClick={()=> navigate('/area/Spanish')} coordinates={[-2.9514099250000125,40.56185077517361]}>
      <circle r={2} fill="#F53" />
      <text textAnchor="middle" fill="#F53">
          Spain
        </text>
      </Marker>
      <Marker  onClick={()=> navigate('/area/Thai')} coordinates={[101.15503538749999,16.109207369710866]}>
      <circle r={2} fill="#F53" />
      <text textAnchor="middle" fill="#F53">
          Thailand
        </text>
      </Marker>
      <Marker className='Marker' onClick={()=> navigate('/area/Vietnamese')} coordinates={[108.44995726249999,13.395018190530212]}>
      <circle r={2} fill="#F53" />
        <text textAnchor="middle" fill="#F53">
          Vietman 
        </text>
      </Marker>
    </ComposableMap>
  );
    }
    


  export default MapMenu;