import React, { useState, useEffect } from 'react';
import { data } from '../../assets/data';
import { Spinner } from '..';
import { Chart } from 'react-google-charts';
import * as S from './Chart.styles';

const AccidentChart = () => {
  const [value, setValues] = useState();

  const getCountriesData = () => {
    let chartData = [['Country', '2010 year', '2019 year', '2020 year']];
    for (let i = 0; i < data.length; i++) {
      const arr = [data[i].country, data[i].year_2010, data[i].year_2019, data[i].year_2020];
      chartData.push(arr);
    }
    setValues(chartData);
  };

  useEffect(() => {
    getCountriesData();
  }, []);

  return (
    <S.ChartContainer>
      <h2>Number of road deaths in EU countries (deaths per million population).</h2>
      {!data && <Spinner />}
      {data && (
        <Chart
          height={'100vh'}
          chartType="BarChart"
          loader={<Spinner />}
          data={value}
          options={{
            chartArea: { width: '55%', height: '100%' },
            colors: ['#000000', '#1aff66', '#00b38f'],
            hAxis: {
              minValue: 0,
            },
            legend: 'none',
            bar: { groupWidth: '80%' },
          }}
        />
      )}
    </S.ChartContainer>
  );
};

export default AccidentChart;
