import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Realization from './components/Realization';
import References from './components/References';
import Job from './components/Job';
import Contact from './components/Contact';


function App() {
  return (<>

 <HashRouter>
   <Menu/>
<Switch>
  <Route exact path='/' component={Home}/>
  <Route exact path='/realization' component={Realization}/>
  <Route exact path='/references' component={References}/>
  <Route exact path='/job' component={Job}/>
  <Route exact path='/contact' component={Contact}/>
  
</Switch>
 
  <Footer/>
   </HashRouter>
  </>
  );
}

export default App;
