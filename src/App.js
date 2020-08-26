import React, {useState} from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom"
import './App.css';
import LogInEmploy from './components/LogInEmploy/LogInEmploy';
import EmploysWall from './components/EmploysWall/EmploysWall';
import LoginUser from './components/UserLogin/LoginUser';
import ProfileUser from './components/profileUser/ProfileUser';


function App() {
  const [employ, setEmploy] = useState([]);
  const [registerEm, setRegisterEm]= useState([]);
  return (
    <div className="App">
    <Router>
  <Switch>
 
  <Route path="/administrador">
    
  </Route>
  <Route path="/empleados">
  <EmploysWall
  registerEm={registerEm}/>
  </Route>
  <Route path="/usuarios">
   
  </Route>
  <Route path="/LoginWorker">
    <LogInEmploy
    employ={employ}
    setEmploy={setEmploy}
    setRegisterEm={setRegisterEm}/>
  </Route>
 
  <Route path="/">
   <LoginUser/>
  </Route>
  
</Switch>
</Router>
    </div>
  );
}

export default App;
