import './App.css';
import React, { Component} from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import api from './api.js';
import { extend } from 'leaflet';

class App extends Component {
  state = {
    local: [],
  }

  async componentDidMount() {
    const response = await api.get('');

    this.setState({
      local: response.data
    });
   
  }
  render(){
    let {local} = (this.state);
    
    
    console.log(local);
    

    let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
  });
  L.Marker.prototype.options.icon = DefaultIcon;

    return(
      <div className="App" >
       
      <h1>Mapa com React</h1>
      <div className="Map">;
      <MapContainer center={[-3.86913800,-38.46292800]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
         <Marker position={[-3.86913800,-38.46292800]}>
          <Popup>
          Rua Francisco Oliveira de Almeida, Eusébio, CE.
          </Popup>
        </Marker>
      </MapContainer>,
      </div>
    </div>
    );
  };
};

  

export default App;

