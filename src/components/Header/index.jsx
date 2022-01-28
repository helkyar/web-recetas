import './component.css';
import {useNavigate  } from "react-router-dom";

import SearchBar from './SearchBar';
import logo from './img/logo.png'
import facebook from './img/facebook.svg'
import twitter from './img/twitter.svg'
import insta from './img/insta.svg'

function Header() {
  const navigate = useNavigate();
  return (
    <header className='header'>
      <SearchBar/>
      <button onClick={()=>navigate("recipes/new/chicken_breast")}>New</button>
      <button onClick={()=>navigate("recipes/popu/"+new Date().getMonth())}>Popu</button>
      <img className="logo" onClick={()=>navigate('/')} src={logo}/>
      <img className="media" src={facebook} />
      <img className="media" src={insta} />
      <img className="media" src={twitter} />
    </header>
  );
}

export default Header;