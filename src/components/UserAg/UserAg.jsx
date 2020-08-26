import React from "react";
import "./UserAg.css";


  const UserAg = () => {
  
    return (
        <div>
             <div className="row">
                <div className="input-field col s6" style={{width:"100%"}}>
                    <input value="" id="first_name2" type="text" className="validate" style={{width:"90%"}}/>
                    <label className="active" for="first_name2">First Name</label>
                </div>
                <div className="input-field col s6" style={{width:"100%"}}>
                    <input type="text" className="datepicker" style={{width:"90%"}}/>
                    <label className="active" for="first_name2"><i className="fas fa-map-marker-alt"></i> Ingresa tu ubicacion</label>
                </div>
            </div>  
        </div>

    );
};

export default UserAg;