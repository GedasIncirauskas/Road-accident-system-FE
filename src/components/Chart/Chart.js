import React, { useState, useEffect } from 'react';
import { data } from '../../data';
import { Spinner } from '..';
import { Chart } from 'react-google-charts';

const AccidentChart = () => {
  const [value, setValues] = useState();

  const getCountriesData = () => {
    let chartData = [['Country', 'Accident on road 2010', 'Accident on road 2019', 'Accident on road 2020']];
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
    <div>
      <h1>Drive safe please</h1>
      {!data && <Spinner />}
      {data && (
        <Chart
          width={'100%'}
          height={'1100px'}
          chartType="BarChart"
          loader={<Spinner />}
          data={value}
          options={{
            title: 'Number of road deaths in EU countries (deaths per million population)',
            chartArea: { width: '40%', height: '90%' },
            colors: ['#b0120a', '#ffab91', '#eee'],
            hAxis: {
              minValue: 0,
            },
          }}
        />
      )}
    </div>
  );
};

export default AccidentChart;
