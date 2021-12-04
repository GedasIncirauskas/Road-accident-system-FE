import React, { useState, useEffect } from 'react';
import { data } from '../../assets/data';
import { Spinner } from '..';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import * as S from './Chart.styles';

const AccidentChart = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <S.ChartContainer>
      <h2>Number of road deaths in EU countries (deaths per million population).</h2>
      {!data && <Spinner />}
      {data && (
        <S.WrapperStyle>
          <BarChart
            overflow="visible"
            width={width - width * 0.25}
            height={800}
            data={data}
            layout="vertical"
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            style={{ stroke: '#fff', strokeWidth: 0.5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis type="category" dataKey="country" />
            <Tooltip />
            <Bar name="In 2010 year" dataKey="year_2010" barSize={10} fill="#000000" />
            <Bar name="In 2019 year" dataKey="year_2019" barSize={10} fill="#1aff66" />
            <Bar name="In 2020 year" dataKey="year_2020" barSize={10} fill="#00b38f" />
          </BarChart>
        </S.WrapperStyle>
      )}
    </S.ChartContainer>
  );
};

export default AccidentChart;
