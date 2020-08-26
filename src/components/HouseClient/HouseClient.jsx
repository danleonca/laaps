import React from 'react'

const FindLocation = ({setCenter, setMarket, datos}) => {
    const findMe=()=>{
    if(!navigator.geolocation){
        alert('el navegador no soporta geolocalización');
        return
    }
    datos.map(
        (position)=>{
            const latitude=position.latitude 
            const longitude=position.longitude
            if(setCenter){
                setCenter(latitude, longitude);
                console.log(latitude, "lat")
                console.log(longitude, "long")

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
            classname="btn"
            onClick={findMe}>Mi ubicación</button>
        </div>
    )
}

export default FindLocation
