import React, {useState} from 'react';
import MapQuest from '../MapQuest/MapQuest'
import HouseClient from '../HouseClient/HouseClient'




const Locations = ({datos}) => {
const [lat, setLat]= useState("19.42847")
const [long, setLong]=useState("-99.12766")
 let markers=[];
const setCenter=(lat, long)=>{
    setLat(lat);
    setLong(long);

    window.L.mapquest.Map.getMap('map').setView(new window.L.LatLng(lat, long),12);
};

const addMarket=(lat, long, title, subtitle)=>{
    const marker= window.L.mapquest.textMarker(
        new window.L.LatLng(lat, long),
        {
            text: title||'',
            subttext: subtitle || '',
            position: 'right',
            type: 'marker',
            icon:{
                primaryColor: '#a8190f',
                secondaryColor:'#db2c2c',
                size:'md'
            }
        }
    )
    .addTo(window.L.mapquest.Map.getMap('map'));
    markers.push(marker)
}

    return (
        <div className="position">
            <div className="row">
               
<MapQuest
            height="30vh"
            width="100%"
            center={[lat, long]}
            tileLayer={'map'}
            zoom={10}
            apiKey="IDFFyJcOlbOygBV77yDmiA8vgNbDmAbf"/>
            </div>


<HouseClient.jsx
setCenter={setCenter}
setMarket={addMarket}
datos={datos}/>

        </div>
    )
}

export default Locations
