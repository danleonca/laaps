import React from "react";
import "./UserInf.css";


  const UserInf = () => {
  
    return (
        <div className="cont">
           <a style={{color:" #405C7B"}}><i className="fas fa-list-ul" style={{color:"#A4D8F4"}}></i>  Servicios</a>
           <ul className="list">
                <li>Lavado en seco (eco-friendly)</li>
                
                <span>La fórmula que utilizamos lava, encera y protege a tu auto de la intemperie.</span>
                <br/>
                <li>Limpieza de interiores</li>
                
                <span>Con microfibras adherentes quita pelusa.</span>
                <br/>
                <li>Sistema de lealtad</li>
                
                <span>¡El sexto lavado va por nuestra cuenta!, revisa cuantos lavados tienes en inicio al lado de este icono</span>
           </ul>
           <button>OK</button>
        </div>

        );
    };

export default UserInf;