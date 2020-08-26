import React, {useState} from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom"
import './App.css';
import LogInEmploy from './components/LogInEmploy/LogInEmploy';
import EmploysWall from './components/EmploysWall/EmploysWall';
<<<<<<< HEAD:src/App.js
import MyLocation from './components/MyLocation/MyLocation';
import Directions from './components/Directions/Directions';
import ClientsLocation from './components/ClientsLocation/ClientsLocation';
import SeeClientDirection from './components/SeeClientDirection/SeeClientDirection';
import Locations from './components/Locations/Locations';
import LoginUser from './components/UserLogin/LoginUser';
import ProfileUser from './components/profileUser/ProfileUser';

=======
import UserApp from './components/UserApp/UserApp';
import UserAg from './components/UserAg/UserAg';
import UserInf from './components/UserInf/UserInf';
import UserPrice from './components/UserPrice/UserPrice';
>>>>>>> 7331240ac96aa61bab724b46232852ed5e1d07c3:src/Eraapp.js

function App() {
  const [employ, setEmploy] = useState([]);
  const [registerEm, setRegisterEm]= useState([]);
  const [datos, setDatos] = React.useState([]);
  return (
    <div className="App">
    <Router>
    
  <Switch>
    <Route path="/empleados/mapas">
      <Locations/>
    </Route>
  
  <Route path="/empleados/servicios">
  <ClientsLocation
  registerEm={registerEm}
  datos={datos}
  setDatos={setDatos}/>
  </Route>
  <Route path="/administrador">

  </Route>
  <Route path="/empleados">
  <EmploysWall
  registerEm={registerEm}/>
  <MyLocation/>
  </Route>
  <Route path="/usuarios">
   
  </Route>
  <Route path="/LoginWorker">
    <LogInEmploy
    employ={employ}
    setEmploy={setEmploy}
    setRegisterEm={setRegisterEm}/>
  </Route>
<<<<<<< HEAD:src/App.js
 
  <Route path="/">
   <LoginUser/>
  </Route>
  
=======
  <Route path="/user">
    <UserApp/>
  </Route>
  <Route path="/userAg">
    <UserAg/>
  </Route>
  <Route path="/userinf">
    <UserInf/>
  </Route>
  <Route path="/userprice">
    <UserPrice/>
  </Route>
>>>>>>> 7331240ac96aa61bab724b46232852ed5e1d07c3:src/Eraapp.js
</Switch>
</Router>
    </div>
  );
}

export default App;