import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { firebase } from "../../controllers/fireBase";

import laapsMini from "../../images/laapsMini.svg";
import flower from "../../images/flower.svg";
import "./EmployGetIN.css";

const EmployGetIN = ({history, employ, setEmploy, setRegisterEm}) => {
    
  const [names, setName] = useState("");
  const [passwords, setPasswords] = useState("");


  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
 
    const data = await fetch("https://car-cleaners.herokuapp.com/cleaner");
     let employs = await data.json();
    console.log(employs);
    setEmploy(employs);
  };

  const addRegister = (user, psw) => {

     const userName=  employ.body.filter(cleaner => (cleaner.name === user))
 
        if(userName.length>0){
            console.log("yea", userName)
            const validatePass= userName.filter(correctPass=> correctPass._id===psw)
            console.log("pass", validatePass)
            if(validatePass.length>0){
                setRegisterEm(validatePass)
                history.push("/empleados")
                console.log("pasar a la siguiente")
               // firebase
               // .firestore()
               // .collection("employsDiaryRegister")
               // .add({
               //   name: names,
               //   password: passwords,
               //   date: new Date(),
               // })
               // .then((docRef) => {
               //   console.log("Document written with ID: ", docRef.id);
               //   setName("");
               //   setPasswords("");
               //   history.push("/empleados")
               // })
               // .catch((error) => {
               //   console.error("Error adding document: ", error);
               // });
            }
        }else (console.log("nombre incorrecto"))
    
    }
       
 
  
  

  return (
    <div>
      {" "}
      <div className="left-align">
        <img src={laapsMini} />
      </div>
      <div id="contact" className="section section-contact scrollspy">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="row">
                <div className="input-field">
                  <input
                    type="text"
                    className="validate"
                    onChange={(e) => setName(e.target.value)}
                    value={names}
                  />
                  <label htmlFor="icon_prefix">Nombre</label>
                </div>
                <div className="input-field row">
                  <input
                    type="password"
                    className="validate"
                    onChange={(e) => setPasswords(e.target.value)}
                    value={passwords}
                  />
                  <label htmlFor="icon_email">Contraseña</label>
                </div>
              </div>

              <button
                className="waves-effect center-aling in-button"
                onClick={()=>addRegister(names, passwords)}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
      <img className="img-flower" src={flower} />
    </div>
  );
};

export default withRouter(EmployGetIN);
