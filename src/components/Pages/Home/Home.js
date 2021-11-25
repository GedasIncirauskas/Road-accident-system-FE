import React from 'react';
import { Spinner } from '../../';
import * as S from './Home.styles';
import Chart from '../../Chart/Chart';

const Home = () => {
  return (
    <S.ContainerStyle>
      {/* <Spinner /> */}
      <Chart />
    </S.ContainerStyle>
  );
};

export default Home;
