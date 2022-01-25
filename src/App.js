import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";

import Header from './components/Header';
import Main from './components/Main'
import Results from './components/Results';
import DetailView from './components/DetailView';
import Footer from './components/Footer';
import {ListPage} from './components/Results/List Page';


function App() {
  return (
    <div className="App">
      <Header/>
        <Switch>
          <Route path="/" element={<Main />}/>
          <Route path="/categories/:category" element={<ListPage/>} />
          <Route path="/recipes/:area" element={<Results/>}/>
          <Route path="/recipes/:type/:search" element={<Results />}/>
          <Route path="/recipe/:id" element={<DetailView/>}/>
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
