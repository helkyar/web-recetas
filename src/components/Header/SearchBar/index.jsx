import { Link } from "react-router-dom";

import './component.css'
import search from './img/search.png'

function SearchBar() {
    // enter-click listener search
    // search info is passed throw GET (/string for searches, /number for the rest)
    // link
    return (
        <div className="search-bar-container">
            <input type="text" placeholder="ingrediente, área..."/>
            <Link to="/recipes/search/pedo" />
                {/* <img src={search} alt="search button" /> */}
        </div>  );
}
 
export default SearchBar;