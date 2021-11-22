import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup } from 'react-leaflet';
import { Spinner, Accident } from '../../';
import TileLayer from './TileLayer';
import LoacationSetter from './LoacationSetter';
import icon from './Icon';
import * as S from './Maps.styles.js';

const Maps = () => {
  const [newData, setnewData] = useState([]);
  const position = [55.401, 24.03];

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/v1/accident`)
      .then((response) => response.json())
      .then((data) => {
        if (!data) {
          alert('No accident yet!');
        }
        return setnewData(data);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <S.ContainerStyle>
      {newData.length === 0 && <Spinner />}
      {newData.length > 0 && (
        <MapContainer
          center={position}
          zoom={5}
          scrollWheelZoom={true}
          icon={icon}
          style={{ width: '100%', height: '90vh' }}
        >
          <LoacationSetter />
          <TileLayer />
          {newData.map((item) => (
            <Marker key={item.id_accident} position={[Number(item.lat), Number(item.lng)]}>
              <Popup>
                <p>User: {item.user}</p>
                <p>Information: {item.description}</p>
              </Popup>
            </Marker>
          ))}
          <Accident />
        </MapContainer>
      )}
    </S.ContainerStyle>
  );
};

export default Maps;
