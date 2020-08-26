import React from 'react'
import { firebase } from "../../controllers/firebase";

const FindLocation = ({setCenter, setMarket, name }) => {
    const findMe=()=>{
    if(!navigator.geolocation){
        alert('el navegador no soporta geolocalización');
        return
    }
    navigator.geolocation.getCurrentPosition(
        (position)=>{
            const {latitude, longitude}= position.coords;
            if(setCenter){
                setCenter(latitude, longitude);
                console.log(latitude, "lat")
                console.log(longitude, "long")

                  firebase
                .firestore()
                .collection("service")
                .add({
                  name: name,
                  date: "",
                  car:"",
                  color:"",
                  latitude:latitude,
                  longitude:longitude,
                  placa:"",
                  precio:"",
                  servicio:""


                })
                .then((docRef) => {
                  console.log("Document written with ID: ", docRef.id);
                
                })
                .catch((error) => {
                  console.error("Error adding document: ", error);
                });



            }
            if(setMarket){
                setMarket(latitude, longitude, 'Ver dirección', `lat:${latitude}, lng: ${longitude}`)
                
            }
        },
        (error)=>{
            alert('error al obtener ubicación ')
        
        }
    )
    }
    return (
        <div>
            <button
            className="btn findMe" style={{width:"100px"}}
            onClick={findMe}>Mi ubicación</button>
        </div>
    )
}

export default FindLocation
