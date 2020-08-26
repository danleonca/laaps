import React, {useState} from 'react'
import laapsMini from "../../images/laapsMini.svg";
import './EmploysWall.css'
import { Link } from "react-router-dom"


const EmploysWall = ({registerEm}) => {




    return (
        <div>
            <div className="left-align"><img src={laapsMini}/></div>
            <div className="section">
           {registerEm.map(item=>(
             <div className="row"> <div className="picture"> <img className="circle" src={item.image}/></div>
             
             <div className="name">Nombre</div>
             <div className="rectangule"></div>
             <div className="realName"> {item.name}</div>

           <div className="name2"> <i className="material-icons ">location_on</i>Ubicación {item.geolocation.latitude}  {item.geolocation.longitude}</div>
          
           
             <Link data-testid="anyButton" to="/empleados/servicios" className="btn next-button"> Siguiente </Link>
           
             </div>
           
           ))}
    




            </div>
        </div>
    )
}

export default EmploysWall
