import React from 'react';
import "./UserApp.css";
import ondaperfil from "../../images/ondaperfil.svg";
import { Link } from "react-router-dom"
import {firebase} from '../../controllers/firebase'


  const UserApp = () => {
    const logOut =()=>{
        firebase.auth().signOut()
        .then(()=>console.log("saliste"))
        .catch(error=>console.log(`ha ocurrido un error: ${error.code}: ${error.message}`))
    }
  
    return (
        <div>
            <div className="firstWa">
                <img src={ondaperfil} />
                <Link to="/"><i className="material-icons right" onClick={logOut}>exit_to_app</i></Link> 
            </div>
            <div className="photo"></div>
            <div>
            <p className="welcome">Bienvenida, Sharida.</p>
            <br/>
            <p className="ptns"><i className="fas fa-star" style={{color:"#FDD60C" , fontSize:"20px"}}></i>0 pts<i className="fas fa-car" style={{color:"#A4D8F4" , fontSize:"20px"}}></i>  0</p>
             </div>
            
            
             <div id="slider">
                <input type="radio" name="slider" id="slide1" />
                <input type="radio" name="slider" id="slide2" />
                <input type="radio" name="slider" id="slide3" />
                <div id="slides">
                    <div id="overflow">
                        <div className="inner">
                            <div className="slide slide_1">
                            </div>
                            <div className="slide slide_2">
                            </div>
                            <div className="slide slide_3">
                            </div>
                        </div>
                    </div>
                </div>
                
                <div id="bullets">
                    <label htmlFor="slide1"></label>
                    <label htmlFor="slide2"></label>
                    <label htmlFor="slide3"></label>
                </div>
                </div>
            
           
            <div className="btns">
                <ul>
                <Link to="/usuarios/agenda" ><div><button className="choose"style={{color:" #405C7B"}} ><i className="fas fa-calendar-alt" style={{color:"#A4D8F4"}}></i>  Agendar</button></div></Link>
                <div className="sep"></div>
                <Link to="/usuarios/precios"><div><button className="choose" style={{color:" #405C7B"}}><i className="fas fa-dollar-sign" style={{color:"#A4D8F4"}}></i>  Precios</button></div></Link>
                <div className="sep"></div>
                <Link to="/usuarios/servicios"><div><button className="choose" style={{color:" #405C7B"}}><i className="fas fa-list-ul" style={{color:"#A4D8F4"}}></i>  Servicios</button></div></Link>
                <div className="sep"></div>
                </ul>


               



            </div> 



        
</div>

    );
};
export default UserApp;