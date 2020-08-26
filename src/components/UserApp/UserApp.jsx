import React from "react";
import "./UserApp.css";
import ondaperfil from "../../images/ondaperfil.svg";
import { Link } from "react-router-dom"


  const UserApp = () => {
  
    return (
        <div>
            <div className="firstWa">
                <img src={ondaperfil} />
            </div>
            <div className="photo"></div>
            <div>
            <p className="welcome">Bienvenida, Fernanda.</p>
            <br/>
            <p className="ptns"><i className="fas fa-star" style={{color:"#FDD60C" , fontSize:"20px"}}></i>0 pts<i className="fas fa-car" style={{color:"#A4D8F4" , fontSize:"20px"}}></i>  0</p>
             </div>
            
            
            <div className="btns">
                <ul>
            <Link to="/usuarios/agenda" ><button className="choose" ><p style={{color:" #405C7B"}}><i className="choose fas fa-calendar-alt" style={{color:"#A4D8F4"}}></i>  Agendar</p></button></Link>
                <div className="sep"></div>
                <Link to="/usuarios/precios"> <button className="choose" style={{color:" #405C7B"}}><a style={{color:" #405C7B"}}><i className="fas fa-dollar-sign" style={{color:"#A4D8F4"}}></i>  Precios</a></button></Link>
                <div className="sep"></div>
                <Link to="/usuarios/servicios"> <button className="choose" style={{color:" #405C7B"}}><a style={{color:" #405C7B"}}><i className="fas fa-list-ul" style={{color:"#A4D8F4"}}></i>  Servicios</a></button></Link>
                <div className="sep"></div>
                </ul>
            </div> 

<div id="slider">
   <input type="radio" name="slider" id="slide1" checked/>
   <input type="radio" name="slider" id="slide2" checked/>
   <input type="radio" name="slider" id="slide3" checked/>
   <input type="radio" name="slider" id="slide4" checked/>
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
      <label hmtlFor="slide1"></label>
      <label hmtlFor="slide2"></label>
      <label hmtlFor="slide3"></label>
   </div>
</div>


         <button className="send">Pedir <i className="fas fa-paper-plane"></i></button>  

         
 
</div>

    );
};

export default UserApp;