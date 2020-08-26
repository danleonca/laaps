import React from "react";
import "./UserPrice.css";
import sedan from "../../images/020-sedan.svg";
import car1 from "../../images/051-car-1.svg";
import car3 from "../../images/suv.svg";
import { Link } from "react-router-dom"

  const UserPrice = () => {
  
    return (
        <div className="cont">
            <a style={{color:" #405C7B"}}><i className="fas fa-dollar-sign" style={{color:"#A4D8F4"}}></i>  Precios</a>
            <br/>
            <div className=" contCars">
                <div className="car">
                 <img src={car1} />
                 <p className="type">COMPACTO</p>
                 <p className="price">$120.00</p>
                </div>
                <div className="car">
                <img src={sedan}/>
                <p className="type">SEDÁN</p>
                 <p className="price">$130.00</p>
                </div>
                <div className="car">
                <img src={car3}/>
                <p className="type">CAMIONETA</p>
                 <p className="price">$150.00</p>
                </div>
            </div>
            <p className="rec">Todos nuestros servicios son en seco con una fórmula eco-friendly.</p>
           <button>OK</button><Link to="/usuarios" ><button>Regresar</button></Link>
        </div>

        );
    };

export default UserPrice;