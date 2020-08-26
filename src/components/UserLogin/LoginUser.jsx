import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom"
import { firebase } from "../../controllers/firebase";
import mini from '../../images/mini-azul.svg'
import des from '../../images/des.png'
import logo from '../../images/LaapsLogo.svg'
import logoWorkB from '../../images/LaapsWorkBlancoLogo.svg'
import onda from '../../images/onda_verde.svg'
import ondita from '../../images/ondita.svg'
import fb from '../../images/fb.svg'
import google from '../../images/google.svg'
import './loginUser.css'
import ProfileUser from '../profileUser/ProfileUser';


function LoginUser() {
    const [users, setUsers] = useState(null)
    useEffect(() => {
       firebase.auth().onAuthStateChanged(user=>{
           if (user){
              return setUsers(user)
           }else{
              return setUsers(null)

           }
       })
    }, [users])
    
    const authGoogle =()=>{
        const providerGoogle = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithRedirect(providerGoogle)
        .then(result => console.log(`${result.user.email} ha iniciado sesión`))
        .catch(error => console.log(`Error: ${error.code}: ${error.message}`))
    }
    const authFacebook =()=>{
        const providerFb = new firebase.auth.FacebookAuthProvider()
        firebase.auth().signInWithRedirect(providerFb)
        .then(result => console.log(`${result.user.email} ha iniciado sesión`))
        .catch(error => console.log(`Error: ${error.code}: ${error.message}`))
    }
    return (
        <div>
        {users && <ProfileUser getUser={users}/>}
        { users === null &&(
            <div>
            <header className="headerLaaps">
            <img className="bg-image responsive-img slider fullscreen" src={logo} />
            <div className="des"><img className="des" src={des}/></div>
            </header> 
            <div className="onda">
            <img className="bg-image responsive-img slider fullscreen" src={onda} />
            <div className="mini">
            <img src={mini}/>
            <p className="text">Ayudando al planeta, revolucionamos el lavado de autos </p>
            <button className="btnRegister">Regístrate</button>
            <p className="textInicia">o inicia sesión</p>
            <div className="social">
            <img src={google} onClick={authGoogle}/>
            <img src={fb} onClick={authFacebook} />
            </div>
            </div>        
            <div className="ondaBlue">
            <img className="bg-image responsive-img slider fullscreen" src={ondita}/>
            <div className="logoWorkB"><img src={logoWorkB}/></div>
            </div>
            </div>
            </div>
            )}
        </div>
       
    )
}


export default LoginUser
