import React from 'react'
import laapsMini from "../../images/laapsMini.svg";
import './EmploysWall.css'

const EmploysWall = ({registerEm}) => {
    return (
        <div>
            <div className="left-align"><img src={laapsMini}/></div>
            <div className="section">
           {registerEm.map(item=>(
             <div> <div className="picture"> <img className="circle" src={item.image}/></div>
             
             <div className="name">Nombre</div>
             <div className="rectangule"></div>
             <div className="realName"> {item.name}</div>

             <div className="name2"> <i className="material-icons ">location_on</i>{item.geolocation.latitude}</div>
          
            
            
            
             </div>
           
           ))}

</div>
        </div>
    )
}

export default EmploysWall
