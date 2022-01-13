import { Link, useNavigate  } from "react-router-dom";

import './component.css'
import search from './img/search.png'
import {useState} from 'react';

function SearchBar() {
    const navigate = useNavigate();
    // link & navigate
    const [input, setInput] = useState('');

    return (
        
        <div className="search-bar-container">
           
            <form onSubmit={()=>input ? navigate(`/recipes/search/${input}`) : navigate("/")}> 
            {/* <form> */}
                <input 
                type="text" 
                value={input} 
                onChange={(e)=>setInput(e.target.value)} 
                placeholder="ingrediente, área..."/>
            </form>
            <Link to={input && `/recipes/search/${input}`}>  <img src={search} alt="search button" /></Link>  
                       
        </div>  );
}
 
export default SearchBar;   