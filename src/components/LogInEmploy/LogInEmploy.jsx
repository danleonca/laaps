import React, { useState } from 'react'
import miniGreen from "../../images/miniGreen.svg"
import laapsWork from "../../images/laapsWork.svg"
import ondaAzul from '../../images/onda-azul.svg'
import EmployGetIN from '../EmployGetIN/EmployGetIN'
import './LogInEmploy.css'

const LogInEmploy = ({ employ, setEmploy, setRegisterEm }) => {
  const [login, setLogin] = useState(true)
  const socioiN = () => {
    setLogin(false)
  }
  return (
    <div>
      {login ?
        (<div>
          <header className="headerLaaps">
            <img className="bg-image responsive-img slider fullscreen" src={laapsWork} />
          </header>
          <div className="onda">
            <img className="bg-image responsive-img slider fullscreen" src={ondaAzul} />
            <div className="mini">
              <img src={miniGreen} />
            </div>
            <div className="btns">
              <button className="logbtn" onClick={() => socioiN()}> Socio  </button>
              <button className="logbtn2"> Administrador </button>
            </div>
          </div>
        </div>
        ) : (
          <div> 
          <EmployGetIN
          employ={employ}
          setEmploy={setEmploy}
          setRegisterEm={setRegisterEm} />
        </div>)
      }
    </div>
  )
}

export default LogInEmploy
