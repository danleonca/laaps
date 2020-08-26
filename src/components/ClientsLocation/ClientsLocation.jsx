import React from "react";
import { Link } from "react-router-dom"
import ondaperfilazul from "../../images/ondaperfilazul.svg";
import "./ClientsLocation.css";
import { firebase } from "../../controllers/firebase";

const ClientsLocation = ({ registerEm, datos, setDatos }) => {
    document.addEventListener('DOMContentLoaded', function() {
        const M=window.M
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems);
      });



  React.useEffect(() => {
    const obtenerDatos = async () => {
      const db = firebase.firestore();
      try {
        const data = await db.collection("service").get();
        const arrayData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(arrayData);
        setDatos(arrayData);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerDatos();
  }, []);
  return (
    <div>
      <div>
        <div>
          <img className="bg-image" src={ondaperfilazul} />

          {registerEm.map((item) => (
            <div className="photo">
              {" "}
              <img
                className="size-picture"
                className="circle"
                src={item.image}
              />
              <p className="welcome">Bienvenid@,{item.name} .</p>
              <br />
             
            </div>
          ))}
        </div>

        <div className="row welcome2">
          {datos.map((datos) => (



            <div class="row">
              <div class="col s9 m6">
           
                <div class="card teal lighten-5">
                  <div class="card-content blue-text text-darken-4">
                    <span class="card-title">Cliente:{datos.name}</span>
                    <p className="welcome2">{datos.date}</p>
                    <p className="welcome2">
                      Auto: {datos.car}- {datos.color}
                    </p>
                    <p className="welcome2">Servicio: {datos.servicio}</p>
                  </div>
                </div>
              </div>
              <div class="col s3 m6">
             
              <Link to="/empleados/mapas" > Ir a los mapas<i className="material-icons ">location_on</i></Link>
             

             
                  </div>
            </div>
          ))}
           
        </div>
       
      </div>
    </div>
  );
};

export default ClientsLocation;
