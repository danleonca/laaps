import React from 'react'
import smallLaaps from '../../images/logo-small.svg'
import footer from '../../images/hojas-verdes.svg'
import './profile.css'

const ProfileUser = ({getUser}) => {
    console.log(getUser.displayName)
    return (
        <div>

        <div className="left-align"><img src={smallLaaps}/></div>
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
             <button className="btnNext">Siguiente</button>
             <img className="lastEl" src={footer}/>
     </div> 
    )
}

export default ProfileUser
