import React, { useState, useContext, useEffect } from 'react';
import { Api } from '../..';
import { AuthContext } from '../../contexts/auth';
import moment from 'moment';
import * as S from './Statistic.styles';

const Statistic = () => {
  const [newData, setnewData] = useState([]);
  const [date, setDate] = useState([]);
  const authContext = useContext(AuthContext);
  const token = authContext.token;

  const getDataFromServer = async () => {
    try {
      const response = await Api.getStatistic(token);
      const data = await response.json();
      getUniqDate(data);
      return setnewData(data);
    } catch (err) {
      return err;
    }
  };

  const getUniqDate = (data) => {
    const dateArray = data.map((item) => moment(item.time).format('YYYY/MM/DD'));
    let uniqDateArray = [];
    dateArray.map((item) => {
      if (uniqDateArray.indexOf(item) === -1) {
        uniqDateArray.push(item);
      }
    });
    setDate(uniqDateArray);
  };

  useEffect(() => {
    getDataFromServer();
  }, []);

  return (
    <div>
      <S.FilterContainer>
        <label htmlFor="date">Filter by date:</label>
        <select name="date">
          {date.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </S.FilterContainer>
      <S.TableContainer>
        <thead>
          <tr>
            <th>Driver</th>
            <th>Information</th>
            <th>Date of accident</th>
          </tr>
        </thead>
        <tbody>
          {newData.map((item) => (
            <tr key={item.id_accident}>
              <td>{item.user}</td>
              <td>{item.description}</td>
              <td>{moment(item.time).format('YYYY/MM/DD')}</td>
            </tr>
          ))}
        </tbody>
      </S.TableContainer>
    </div>
  );
};

export default Statistic;
