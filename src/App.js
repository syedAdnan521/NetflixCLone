import React from 'react';
import { BrowserRouter,Switch , Route,} from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import Home from './pages/Home';
import Netflixshow from './pages/Netflixshow';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <ScrollToTop />
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/" component={Netflixshow}/>
      </Switch>
      <Footer/>
    </div>
     </BrowserRouter>
  );
}

export default App;
