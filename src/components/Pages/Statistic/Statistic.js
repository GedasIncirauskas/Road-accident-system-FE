import React, { useState, useContext, useEffect } from 'react';
import { Api, Selector, Table, Spinner } from '../..';
import { AuthContext } from '../../../contexts/auth';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const Statistic = () => {
  const [newData, setnewData] = useState([]);
  const [date, setDate] = useState();
  const [selector, setSelector] = useState(false);
  const authContext = useContext(AuthContext);
  const token = authContext.token;
  const navigate = useNavigate();

  const getDataFromServer = async () => {
    try {
      const response = await Api.getStatistic(token);
      const data = await response.json();
      if (data.err) {
        return navigate('/login');
      }
      getUniqDate(data);
      return setnewData(data);
    } catch (err) {
      return err;
    }
  };

  const momentFn = (time) => {
    return moment(time).format('YYYY/MM/DD');
  };

  const getUniqDate = (data) => {
    const dateArray = data.map((item) => momentFn(item.time));
    setDate([...new Set(dateArray)]);
  };

  const filterData = () => {
    return newData.filter((item) => momentFn(item.time) === selector || !selector);
  };

  useEffect(() => {
    getDataFromServer();
  }, []);

  return (
    <div>
      {newData.length !== 0 ? (
        <>
          <Selector date={date} selector={selector} setSelector={setSelector} />
          <Table filterData={filterData} />
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Statistic;
