import React, {useState} from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom"
import './App.css';
import LogInEmploy from './components/LogInEmploy/LogInEmploy';
import EmploysWall from './components/EmploysWall/EmploysWall';
import MyLocation from './components/MyLocation/MyLocation';
import Directions from './components/Directions/Directions';
import ClientsLocation from './components/ClientsLocation/ClientsLocation';
import SeeClientDirection from './components/SeeClientDirection/SeeClientDirection';
import Locations from './components/Locations/Locations';
import LoginUser from './components/UserLogin/LoginUser';
import UserApp from './components/UserApp/UserApp';
import UserAg from './components/UserAg/UserAg';
import UserInf from './components/UserInf/UserInf';
import UserPrice from './components/UserPrice/UserPrice';

function App() {
  const [employ, setEmploy] = useState([]);
  const [registerEm, setRegisterEm]= useState([]);
  const [datos, setDatos] = React.useState([]);
  return (
    <div className="App">
    <Router>
  <Switch>
  <Route path="/usuarios/servicio">
      <UserInf/>
    </Route>
  <Route path="/usuarios/precios">
      <UserPrice/>
    </Route>
  <Route path="/usuarios/agenda">
      <UserAg/>
    </Route>
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
 
  </Route>
  <Route path="/usuarios">
  <UserApp/>
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
