import React from 'react'
import { Link } from "react-router-dom"
import smallLaaps from '../../images/logo-small.svg'
import footer from '../../images/hojas-verdes.svg'
import {firebase} from '../../controllers/firebase'
import './profile.css'

const ProfileUser = ({getUser}) => {
    const logOut =()=>{
        firebase.auth().signOut()
        .then(()=>console.log("saliste"))
        .catch(error=>console.log(`ha ocurrido un error: ${error.code}: ${error.message}`))


    }
    
    console.log(getUser.displayName)
    return (
        <div>
        <div className="headerProfile">
        <img src={smallLaaps}/>
        <i className="material-icons" onClick={logOut}>exit_to_app</i>
        </div>
        <div className="row" id="card">
        <div className="col s12 m6">
          <div className="card" id="card">
          <div className="contentPicture"> <img className="picture" src={getUser.photoURL}/></div>
              <a className="btn-floating halfway-fab waves-effect" id="iconEdit">
              <i className="material-icons ">create</i>
              </a>
          </div>
        </div>
      </div>

        <div className ="section container">
        <div className="row">
        <div className="col s12">
        <div className="row">
        <div className="input-field col s12">
        <input defaultValue={getUser.displayName} id="first_name2" type="text" className="validate" />
        <label className="active" htmlFor="first_name2">Nombre</label>
        </div>
        <div className="input-field col s12">
        <i className="material-icons prefix">location_on</i>
        <input id="icon_prefix" type="text" className="validate"/>
        <label htmlFor="icon_prefix">Ubicación</label>
      </div>

        </div>
        
        </div>
        </div>
        
        </div>
             <Link to="/usuarios" >Siguiente</Link>
             <Link data-testid="anyButton" to="/empleados/servicios" className="btn next-button"> Siguiente!!!! </Link>
             <img className="lastEl" src={footer}/>
     </div> 
    )
}

export default ProfileUser
