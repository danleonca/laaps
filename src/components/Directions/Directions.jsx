import React, {useEffect}  from 'react'

const Directions = () => {
  
    window.onload = function() {
        const L = window.L
        L.mapquest.key = 'IDFFyJcOlbOygBV77yDmiA8vgNbDmAbf';

        var popup = L.popup();

        var map = L.mapquest.map('map', {
          center: [19.42847, -99.12766],
          layers: L.mapquest.tileLayer('map'),
          zoom: 14
        });

        map.addControl(L.mapquest.control());

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
      }
   

    return (
        <div>
            <div id="map" style={{width: "100%", height: "530px"}}></div>
        </div>
    )
}

export default Directions
