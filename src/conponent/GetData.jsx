import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setApiData } from '../redux/features/api/apiSlice';

const GetData = () => {
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.api.apidata);

  useEffect(() => {
    const fetchData = async () => {
      const API_KEY = 'P2Z1TYA8TWHZQFE7'; 
      const symbol = 'IBM';
      const interval = '5min';
      const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${interval}&apikey=${API_KEY}`;

      try {
        const response = await axios.get(url);
        dispatch(setApiData(response.data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <pre>{JSON.stringify(apiData, null, 2)}</pre>
    </div>
  );
};

export default GetData;
