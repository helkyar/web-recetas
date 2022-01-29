import carne from './img/carne.png'
import cereal from './img/cereal.png'
import pez from './img/pez.png'
import pasta from './img/pasta.png'
import arroz from './img/bol-de-arroz.png'
import bolleria from './img/bollo.png'
import marisco from './img/camaron.png'
import ensalada from './img/ensalada.png'
import sopa from './img/sopa.png'
import verduras from './img/verduras.png'
import './component.css'
import {useNavigate} from 'react-router-dom'
import React,{useState} from 'react';

const food = [{title:"Carne" ,nav:'meat',img:carne,content : [{name:"Cerdo",nav:"pig"},{name:"Vaca",nav:"cow"},{name:"Pollo",nav:"chicken"},{name:"Ternera",nav:"veal"}]},{title:"Postres",img:cereal,nav:'desserts',content : [{name:"Tartas",nav:"cakes"},{name:"Postres con frutas",nav:"desserts with fruit"},{name:"Flan",nav:"flan"},{name:"Helado",nav:"ice cream"}]},{title:"Pescado",img:pez,nav:'fish',content : [{name:"Salmon",nav:"salmon"},{name:"Atún",nav:"tuna"},{name:"Merluza",nav:"hake"},{name:"Bacalao",nav:"Cod"}]},{title:"Pasta",img:pasta,nav:'pasta',content : [{name:"Espaguetis",nav:"spaghetti"},{name:"Pizza",nav:"pizza"},{name:"Macarrones",nav:"macaroni"},{name:"Lasaña",nav:"lasagna"}]},{title:"Ensaladas",img:ensalada,nav:'salad',content : [{name:"Ensaladas saludables",nav:"healthy salads"},{name:"Ensaladas con fruta",nav:"salad with fruit"},{name:"Ensaladas con pescado",nav:"salad with fish"},{name:"Ensaladas con pasta",nav:"salad with pasta"}]},{title:"Marisco",img:marisco,nav:'seafood',content : [{name:"Camarones",nav:"prawns"},{name:"Calamares",nav:"squid"},{name:"Langostinos",nav:"prawns"},{name:"Pulpo",nav:"octopus"}]},{title:"Verduras",img:verduras,nav:'vegetables',content : [{name:"Patata",nav:"potatoe"},{name:"Berenjena",nav:"eggplant"},{name:"Calabacín",nav:"zucchini"},{name:"Otras verduras",nav:"vegetables"}]},{title:"Sopas",img:sopa,nav:'soup',content : [{name:"Sopas",nav:"soup"},{name:"Cremas",nav:"cream"},{name:"Caldos",nav:"broths"},{name:"Gazpachos",nav:"gazapacho"}]},{title:"Arroces",img:arroz,nav:'rice',content : [{name:"Risottos",nav:"risottos"},{name:"Arroces sueltos",nav:"rice"},{name:"Paellas",nav:"paella"},{name:"Arroz con carne",nav:"rice with meat"}]},{title:"Bolleria",img:bolleria,nav:'bakery',content : [{name:"Bizcochos",nav:"biscuits"},{name:"Galletas",nav:"cookies"},{name:"Pan",nav:"bread"},{name:"Cupcakes",nav:"cupcakes"}]}]

export function DropMenu () {
   
  const navigate = useNavigate();

  
  
  return <div className='dropMenu'><div className='dropMenuCategories'>{food.map((element,index) => { return  (<div className='category' key={index}><div className='categoryHeader'><img src={element.img} width='45px' height='45px'></img><h3 onClick={()=> navigate(`/recipes/search/${element.nav}`)}>{element.title}</h3></div><ul>{element.content.map((c) =>(<><li><p onClick={()=> navigate(`/recipes/search/${c.nav}`)}>{c.name}</p></li> </>))}</ul></div>)})}</div></div> 


  
}
