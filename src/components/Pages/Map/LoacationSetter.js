import React, { useContext, useEffect, useState } from 'react';
import { CooredinateContext } from '../../contexts/Coordinates';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import icon from './Icon';
import * as S from './LocationSetter.styles';

const LoacationSetter = () => {
  const [toggleError, setToggleError] = useState(false);
  const [msg, setMsg] = useState();
  const map = useMap();
  const cooredinateContext = useContext(CooredinateContext);

  const getUserGeolocationDetails = () => {
    navigator.geolocation.getCurrentPosition(success, error);
  };

  const success = (pos) => {
    const crd = pos.coords;
    map.flyTo([Number(crd.latitude), Number(crd.longitude)]);
    setTimeout(() => {
      map.setZoom(20);
    }, 1000);

    const marker = new L.marker([Number(crd.latitude), Number(crd.longitude)], {
      draggable: true,
      icon: icon,
    }).addTo(map);

    marker.on('drag', (e) => {
      const marker = e.target;
      const position = marker.getLatLng();
      map.panTo(new L.LatLng(position.lat, position.lng));
      cooredinateContext.setCoordinates([position.lat, position.lng]);
    });
  };

  const error = (err) => {
    setMsg(`${err.message}. We need to get your location if you want enter accident!`);
    setToggleError(!toggleError);
  };

  useEffect(() => {
    getUserGeolocationDetails();
  }, []);

  return <>{toggleError ? <S.ContainerStyle>{msg}</S.ContainerStyle> : ''} </>;
};

export default LoacationSetter;
