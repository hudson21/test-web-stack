import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import * as ELG from 'esri-leaflet-geocoder';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

import classes from './styled.module.css';

const Map = ({ className, address, ...rest }) => {
  const position = [53.35, 18.8];
  const [latValue, setLatValue] = useState('');
  const [lngValue, setLngValue] = useState('');

  function Geocoder({ address }) {
    const map = useMap();

    ELG.geocode()
      .text(address)
      .run((err, results, response) => {
        const { lat, lng } = results.results[0].latlng;
        setLatValue(lat);
        setLngValue(lng);
        map.setView([lat, lng], 15);
      });

    return null;
  }

  return (
    <MapContainer zoom={15} center={position} className={classes.map} {...rest}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <Geocoder address={address} />

      <Marker position={[latValue, lngValue]} animate={true}>
        <Popup>This is my address :D</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
