import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup } from 'react-leaflet';
import { Spinner, Accident } from '../../../';
import Api from '../../../../Api';
import TileLayer from '../TileLayer';
import LoacationSetter from '../LocationSetter/LoacationSetter';
import icon from '../Icon';
import moment from 'moment';
import * as S from './Maps.styles.js';

const Maps = () => {
  const [newData, setnewData] = useState([]);
  const token = localStorage.getItem('token');
  const position = [55.401, 24.03];

  const getDataToMap = async () => {
    try {
      const response = await Api.getAccident();
      const data = await response.json();
      if (!data) {
        alert('No accident yet!');
      }
      return setnewData(data);
    } catch (err) {
      alert(err);
    }
  };

  const deleteAccidentById = async (id) => {
    if (!id) {
      return alert('Please try again');
    }
    try {
      await Api.deleteAccident(id);
      getDataToMap();
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => getDataToMap(), []);

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
              <Popup maxWidth="200">
                <S.ParagraphStyle>User: {item.user}</S.ParagraphStyle>
                <S.ParagraphStyle>Information: {item.description}</S.ParagraphStyle>
                {token ? (
                  <S.ImageContainer>
                    <S.ImageStyle src={`${process.env.REACT_APP_BASE_URL}${item.file}`} alt={item.user} />
                    <p>Enter date: {moment(item.time).format('DD/MM/YYYY, h:mm a')}</p>
                    <S.DeleteBtnStyle onClick={() => deleteAccidentById(item.id_accident)}>Delete</S.DeleteBtnStyle>
                  </S.ImageContainer>
                ) : (
                  ''
                )}
              </Popup>
            </Marker>
          ))}
          <Accident getData={getDataToMap} />
        </MapContainer>
      )}
    </S.ContainerStyle>
  );
};

export default Maps;
