import {MapContainer, TileLayer }  from 'react-leaflet';
import { CircleMarker } from 'react-leaflet';

export const Map = function({dataMap}) {
  // console.log(props.dataMap.data.attributes.coordinates)

  const {coordinates} = dataMap.data.attributes;
  // console.log(coordinates);
 
  const position = coordinates.split(',');

    return (
     
      <MapContainer style={{height:'33.2em'}}center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <CircleMarker radius={120} center={position}>
          </CircleMarker>
      </MapContainer>
        
)}
        

    
