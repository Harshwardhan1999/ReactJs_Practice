import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import HeaderBody from './components/HeaderBody'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import Bus from './components/Pages/Bus';
import Train from './components/Pages/Train';
import Flight from './components/Pages/Flight';
import SignUp from './components/Pages/SignUp';



function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Bus' exact component={Bus}/>
        <Route path='/Train' exact component={Train}/>
        <Route path='/Flight' exact component={Flight}/>
        <Route path='/SignUp' exact component={SignUp}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
