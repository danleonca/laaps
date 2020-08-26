import React from "react";
import "./UserApp.css";
import ondaperfil from "../../images/ondaperfil.svg";


  const UserApp = () => {
  
    return (
        <div>
            <div className="firstWa">
                <img src={ondaperfil} />
            </div>
            <div className="photo"></div>
            <div>
            <p className="welcome"><n>Bienvenida, Fernanda.</n></p>
            <br/>
            <p className="ptns"><i className="fas fa-star" style={{color:"#FDD60C" , fontSize:"20px"}}></i>0 pts<i class="fas fa-car" style={{color:"#A4D8F4" , fontSize:"20px"}}></i>  0</p>
             </div>
            
            
            <div className="btns">
            <button class="choose" ><a style={{color:" #405C7B"}}><i className="fas fa-calendar-alt" style={{color:"#A4D8F4"}}></i>  Agendar</a></button>
                <div className="sep"></div>
            <button className="choose" style={{color:" #405C7B"}}><a style={{color:" #405C7B"}}><i className="fas fa-dollar-sign" style={{color:"#A4D8F4"}}></i>  Precios</a></button>
                <div className="sep"></div>
            <button className="choose" style={{color:" #405C7B"}}><a style={{color:" #405C7B"}}><i className="fas fa-list-ul" style={{color:"#A4D8F4"}}></i>  Servicios</a></button>
                <div className="sep"></div>
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
      <label for="slide1"></label>
      <label for="slide2"></label>
      <label for="slide3"></label>
   </div>
</div>


         <button className="send">Pedir <i className="fas fa-paper-plane"></i></button>  

         
 
</div>

    );
};

export default UserApp;