import React from 'react';
import moment from 'moment';
import * as S from './Table.styles';

const Table = ({ filterData }) => {
  return (
    <S.TableContainer>
      <thead>
        <tr>
          <th>Driver</th>
          <th>Information</th>
          <th>Date of accident</th>
        </tr>
      </thead>
      <tbody>
        {filterData().map((item) => (
          <tr key={item.id_accident} style={{ background: item.status === 1 ? '#99ff99' : '' }}>
            <td>{item.user}</td>
            <td>{item.description}</td>
            <td>{`${
              item.status !== 1 ? moment(item.time).format('YYYY/MM/DD') : 'Way is open'
            }`}</td>
          </tr>
        ))}
      </tbody>
    </S.TableContainer>
  );
};

export default Table;
