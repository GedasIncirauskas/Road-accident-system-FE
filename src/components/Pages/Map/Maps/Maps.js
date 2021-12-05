import React, { useState, useEffect, useContext } from 'react';
import { MapContainer, Marker, Popup } from 'react-leaflet';
import { Spinner, Accident, Api } from '../../../';
import { AuthContext } from '../../../../contexts/auth';
import TileLayer from '../TileLayer';
import LoacationSetter from '../LocationSetter/LoacationSetter';
import icon from '../Icon';
import moment from 'moment';
import * as S from './Maps.styles.js';

const Maps = () => {
  const [newData, setnewData] = useState([]);
  const [serverErr, setServerErr] = useState(false);
  const authContext = useContext(AuthContext);
  const token = authContext.token;
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
      return setServerErr(!serverErr);
    }
  };

  const deleteAccidentById = async (id) => {
    if (!id) {
      return alert('Please try again');
    }
    try {
      await Api.deleteById(id, token);
      getDataToMap();
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => getDataToMap(), []);

  return (
    <S.ContainerStyle>
      {!serverErr ? (
        <MapContainer
          center={position}
          zoom={5}
          scrollWheelZoom={true}
          icon={icon}
          style={{ width: '100%', height: '90vh', fontFamily: 'Manrope, "sans-serif' }}
        >
          <LoacationSetter />
          <TileLayer />
          {newData.map((item) => (
            <Marker key={item.id_accident} position={[Number(item.lat), Number(item.lng)]}>
              <Popup maxWidth="200">
                <S.ParagraphStyle>
                  <span>User:</span> {item.user}
                </S.ParagraphStyle>
                <S.ParagraphStyle>
                  <span>Information:</span> {item.description}
                </S.ParagraphStyle>
                {token ? (
                  <S.ImageContainer>
                    <S.ImageStyle
                      src={`${process.env.REACT_APP_BASE_URL}${item.file}`}
                      alt={item.user}
                    />
                    <p>
                      <span>Enter date:</span> {moment(item.time).format('DD/MM/YYYY, h:mm a')}
                    </p>
                    <S.DeleteBtnStyle onClick={() => deleteAccidentById(item.id_accident)}>
                      Delete
                    </S.DeleteBtnStyle>
                  </S.ImageContainer>
                ) : (
                  ''
                )}
              </Popup>
            </Marker>
          ))}
          <Accident getData={getDataToMap} />
        </MapContainer>
      ) : (
        <Spinner />
      )}
    </S.ContainerStyle>
  );
};

export default Maps;
