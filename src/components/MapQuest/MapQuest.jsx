import React, {useEffect, useState} from 'react'

const MapQuest = ({height, width, center, tileLayer, zoom, apiKey}) => {
const[direction, setDirection]=useState([])
    useEffect(()=>{
        const L=window.L
        window.L.mapquest.key=apiKey;

        const map=window.L.mapquest.map('map', {
            center,
            layers: window.L.mapquest.tileLayer(tileLayer),
            zoom
        });
        map.addControl(window.L.mapquest.control());

        var popup = L.popup();

        map.on('click', function(e) {
           
            popup.setLatLng(e.latlng).openOn(this);
            L.mapquest.geocoding().reverse(e.latlng, generatePopupContent);
          });
  
          function generatePopupContent(error, response) {
            var location = response.results[0].locations[0];
            var street = location.street;
            var city = location.adminArea5;
            var state = location.adminArea3;
           
            popup.setContent(street + ', ' + city + ', ' + state);
          }


    }, []);
    return (
        <div id="map" style={{width, height}}>
            <p>Cargando Mapa..</p>
            <div id="map" style={{width: "75%", height: "530px"}}></div>

   
        </div>
    )
}

export default MapQuest
