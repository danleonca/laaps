import React from 'react'
import { Link } from "react-router-dom"
import smallLaaps from '../../images/logo-small.svg'
import footer from '../../images/hojas-verdes.svg'
import {firebase} from '../../controllers/firebase'
import './profile.css'
import MyLocation from '../MyLocation/MyLocation'

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
        <MyLocation name={getUser.displayName}/>
        </div>
        <div className="input-field col s12">
      

        <Link clasName="btn" to="/usuarios" >Siguiente</Link>
      </div>

        </div>
        
        </div>
        </div>
        
        </div>
            <img className="lastEl" src={footer}/>
     </div> 
    )
}

export default ProfileUser
